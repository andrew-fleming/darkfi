use drk::cli::{Config, DrkConfig};
use drk::util::{NetworkName, join_config_path};
use drk::{rpc::jsonrpc, rpc::jsonrpc::JsonResult, Error, Result};

use clap::{clap_app, ArgMatches};
use log::debug;
use serde_json::{json, Value};

use std::path::PathBuf;
use std::str::FromStr;

struct Drk {
    url: String,
}

impl Drk {
    pub fn new(url: String) -> Self {
        Self { url }
    }

    // Retrieve cashier features and error if they
    // don't support the network
    async fn check_network(&self, network: &NetworkName) -> Result<()> {
        let features = self.features().await?;

        if features.as_object().is_none() {
            return Err(Error::NotSupportedNetwork);
        }

        for (net, _) in features.as_object().unwrap() {
            if network == &NetworkName::from_str(&net.as_str().to_lowercase())? {
                return Ok(());
            }
        }

        Err(Error::NotSupportedNetwork)
    }

    async fn request(&self, r: jsonrpc::JsonRequest) -> Result<Value> {
        let reply: JsonResult;
        debug!(target: "RPC", "--> {}", serde_json::to_string(&r)?);
        match jsonrpc::send_request(&self.url, json!(r)).await {
            Ok(v) => reply = v,
            Err(e) => return Err(e),
        }

        match reply {
            JsonResult::Resp(r) => {
                debug!(target: "RPC", "<-- {}", serde_json::to_string(&r)?);
                return Ok(r.result);
            }

            JsonResult::Err(e) => {
                debug!(target: "RPC", "<-- {}", serde_json::to_string(&e)?);
                return Err(Error::JsonRpcError(e.error.message.to_string()));
            }

            JsonResult::Notif(n) => {
                debug!(target: "RPC", "<-- {}", serde_json::to_string(&n)?);
                return Err(Error::JsonRpcError("Unexpected reply".to_string()));
            }
        }
    }

    // --> {"jsonrpc": "2.0", "method": "say_hello", "params": [], "id": 42}
    // <-- {"jsonrpc": "2.0", "result": "hello world", "id": 42}
    async fn say_hello(&self) -> Result<Value> {
        let req = jsonrpc::request(json!("say_hello"), json!([]));
        Ok(self.request(req).await?)
    }

    // --> {"jsonrpc": "2.0", "method": "create_wallet", "params": [], "id": 42}
    // <-- {"jsonrpc": "2.0", "result": true, "id": 42}
    async fn create_wallet(&self) -> Result<Value> {
        let req = jsonrpc::request(json!("create_wallet"), json!([]));
        Ok(self.request(req).await?)
    }

    // --> {"jsonrpc": "2.0", "method": "key_gen", "params": [], "id": 42}
    // <-- {"jsonrpc": "2.0", "result": true, "id": 42}
    async fn key_gen(&self) -> Result<Value> {
        let req = jsonrpc::request(json!("key_gen"), json!([]));
        Ok(self.request(req).await?)
    }

    // --> {"jsonrpc": "2.0", "method": "get_key", "params": [], "id": 42}
    // <-- {"jsonrpc": "2.0", "result": "vdNS7oBj7KvsMWWmo9r96SV4SqATLrGsH2a3PGpCfJC", "id": 42}
    async fn get_key(&self) -> Result<Value> {
        let req = jsonrpc::request(json!("get_key"), json!([]));
        Ok(self.request(req).await?)
    }

    // --> {"jsonrpc": "2.0", "method": "get_key", "params": ["usdc"], "id": 42}
    // <-- {"jsonrpc": "2.0", "result": "vdNS7oBj7KvsMWWmo9r96SV4SqATLrGsH2a3PGpCfJC", "id": 42}
    async fn get_token_id(&self, token: &str) -> Result<Value> {
        let req = jsonrpc::request(json!("get_token_id"), json!([token]));
        Ok(self.request(req).await?)
    }

    // --> {"jsonrpc": "2.0", "method": "features", "params": [], "id": 42}
    // <-- {"jsonrpc": "2.0", "result": ["network": "btc", "sol"], "id": 42}
    async fn features(&self) -> Result<Value> {
        let req = jsonrpc::request(json!("features"), json!([]));
        Ok(self.request(req).await?)
    }

    // --> {"jsonrpc": "2.0", "method": "deposit", "params": ["solana", "usdc"], "id": 42}
    // <-- {"jsonrpc": "2.0", "result": "Ht5G1RhkcKnpLVLMhqJc5aqZ4wYUEbxbtZwGCVbgU7DL", "id": 42}
    async fn deposit(&self, network: &str, asset: &str) -> Result<Value> {
        let req = jsonrpc::request(json!("deposit"), json!([network, asset]));
        Ok(self.request(req).await?)
    }

    // --> {"jsonrpc": "2.0", "method": "withdraw",
    //      "params": ["solana", "usdc", "Ht5G1RhkcKnpLVLMhqJc5aqZ4wYUEbxbtZwGCVbgU7DL", 13.37"], "id": 42}
    // <-- {"jsonrpc": "2.0", "result": "txID", "id": 42}
    async fn withdraw(
        &self,
        network: &str,
        asset: &str,
        address: &str,
        amount: f64,
    ) -> Result<Value> {
        let req = jsonrpc::request(json!("withdraw"), json!([network, asset, address, amount]));
        Ok(self.request(req).await?)
    }

    // --> {"jsonrpc": "2.0", "method": "transfer",
    //      "params": ["dusdc", "vdNS7oBj7KvsMWWmo9r96SV4SqATLrGsH2a3PGpCfJC", 13.37], "id": 42}
    // <-- {"jsonrpc": "2.0", "result": "txID", "id": 42}
    async fn transfer(&self, asset: &str, address: &str, amount: f64) -> Result<Value> {
        let req = jsonrpc::request(json!("transfer"), json!([asset, address, amount]));
        Ok(self.request(req).await?)
    }
}

async fn start(config: &DrkConfig, options: ArgMatches<'_>) -> Result<()> {
    let client = Drk::new(config.darkfid_rpc_url.clone());

    if options.is_present("hello") {
        let reply = client.say_hello().await?;
        println!("Server replied: {}", &reply.to_string());
        return Ok(());
    }

    if let Some(matches) = options.subcommand_matches("wallet") {
        if matches.is_present("create") {
            let reply = client.create_wallet().await?;
            println!("Server replied: {}", &reply.to_string());
            return Ok(());
        }

        if matches.is_present("keygen") {
            let reply = client.key_gen().await?;
            println!("Server replied: {}", &reply.to_string());
            return Ok(());
        }

        if matches.is_present("address") {
            let reply = client.get_key().await?;
            println!("Server replied: {}", &reply.to_string());
            return Ok(());
        }
    }

    if let Some(matches) = options.subcommand_matches("id") {
        let token = matches.value_of("TOKEN").unwrap();

        let reply = client.get_token_id(&token).await?;

        println!("Server replied: {}", &reply.to_string());
        return Ok(());
    }

    if options.is_present("features") {
        let reply = client.features().await?;
        println!("Server replied: {}", &reply.to_string());
        return Ok(());
    }

    if let Some(matches) = options.subcommand_matches("deposit") {
        let network = matches.value_of("network").unwrap().to_lowercase();
        let token = matches.value_of("TOKENID").unwrap();

        client.check_network(&NetworkName::from_str(&network)?).await?;

        let reply = client.deposit(&network, &token).await?;

        println!(
            "Deposit your coins to the following address: {}",
            &reply.to_string()
        );

        return Ok(());
    }

    if let Some(matches) = options.subcommand_matches("withdraw") {
        let network = matches.value_of("network").unwrap().to_lowercase();
        let token = matches.value_of("TOKENID").unwrap();
        let address = matches.value_of("ADDRESS").unwrap();
        let amount = matches.value_of("AMOUNT").unwrap().parse::<f64>()?;

        client.check_network(&NetworkName::from_str(&network)?).await?;

        let reply = client.withdraw(&network, &token, &address, amount).await?;

        println!("{}", &reply.to_string());

        return Ok(());
    }

    if let Some(matches) = options.subcommand_matches("transfer") {
        let asset_type = matches.value_of("ASSET_TYPE").unwrap();
        let address = matches.value_of("ADDRESS").unwrap();
        let amount = matches.value_of("AMOUNT").unwrap().parse::<f64>()?;

        let reply = client.transfer(&asset_type, &address, amount).await?;

        println!("Transaction ID: {}", &reply.to_string());

        return Ok(());
    }

    println!("Please run 'drk help' to see usage.");
    Err(Error::MissingParams)
}

#[async_std::main]
async fn main() -> Result<()> {
    let args = clap_app!(drk =>
    (@arg CONFIG: -c --config +takes_value "Sets a custom config file")
    (@arg verbose: -v --verbose "Increase verbosity")
    (@subcommand hello =>
     (about: "Say hello to the RPC")
    )
    (@subcommand wallet =>
     (about: "Wallet operations")
     (@arg create: --create "Initialize a new wallet")
     (@arg keygen: --keygen "Generate wallet keypair")
     (@arg address: --address "Get wallet address")
    )
    (@subcommand id =>
     (about: "Get hexidecimal ID for token symbol")
     (@arg TOKEN: +required
      "Which token to query (BTC/SOL/USDC/...)")
    )
    (@subcommand features =>
     (about: "Show what features the cashier supports")
    )
    (@subcommand deposit =>
     (about: "Deposit clear assets for Dark assets")
     (@arg network: +required +takes_value --network
      "Which network to use (bitcoin/solana/...)")
     (@arg TOKENID: +required
      "Which tokenID to deposit (alphanumeric string)")
    )
    (@subcommand transfer =>
     (about: "Transfer Dark assets to address")
     (@arg ASSET_TYPE: +required "Desired asset")
     (@arg ADDRESS: +required "Recipient address")
     (@arg AMOUNT: +required "Amount to send")
    )
    (@subcommand withdraw =>
     (about: "Withdraw Dark assets for clear assets")
     (@arg network: +required +takes_value --network
      "Which network to use (bitcoin/solana/...)")
     (@arg TOKENID: +required "Which tokenID to receive (alphanumeric string)")
     (@arg ADDRESS: +required "Recipient address")
     (@arg AMOUNT: +required "Amount to send")
    )
    )
    .get_matches();

    let config_path = if args.is_present("CONFIG") {
        PathBuf::from(args.value_of("CONFIG").unwrap())
    } else {
        join_config_path(&PathBuf::from("drk.toml"))?
    };

    let loglevel = if args.is_present("verbose") {
        log::Level::Debug
    } else {
        log::Level::Info
    };

    simple_logger::init_with_level(loglevel)?;
    let config = Config::<DrkConfig>::load(config_path)?;

    start(&config, args).await
}
