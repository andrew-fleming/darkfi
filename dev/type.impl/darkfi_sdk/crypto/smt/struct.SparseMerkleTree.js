(function() {var type_impls = {
"darkfi_sdk":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SparseMerkleTree%3C'a,+N,+M,+F,+H,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#141\">source</a><a href=\"#impl-Clone-for-SparseMerkleTree%3C'a,+N,+M,+F,+H,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const M: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/smt/util/trait.FieldElement.html\" title=\"trait darkfi_sdk::crypto::smt::util::FieldElement\">FieldElement</a>, H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/smt/util/trait.FieldHasher.html\" title=\"trait darkfi_sdk::crypto::smt::util::FieldHasher\">FieldHasher</a>&lt;F, 2&gt;, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/smt/trait.StorageAdapter.html\" title=\"trait darkfi_sdk::crypto::smt::StorageAdapter\">StorageAdapter</a>&lt;Value = F&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html\" title=\"struct darkfi_sdk::crypto::smt::SparseMerkleTree\">SparseMerkleTree</a>&lt;'a, N, M, F, H, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#141\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html\" title=\"struct darkfi_sdk::crypto::smt::SparseMerkleTree\">SparseMerkleTree</a>&lt;'a, N, M, F, H, S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","darkfi_sdk::crypto::smt::wasmdb::SmtWasmFp","darkfi_sdk::crypto::smt::SmtMemoryFp"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SparseMerkleTree%3C'a,+N,+M,+F,+H,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#141\">source</a><a href=\"#impl-Debug-for-SparseMerkleTree%3C'a,+N,+M,+F,+H,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const M: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/smt/util/trait.FieldElement.html\" title=\"trait darkfi_sdk::crypto::smt::util::FieldElement\">FieldElement</a>, H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/smt/util/trait.FieldHasher.html\" title=\"trait darkfi_sdk::crypto::smt::util::FieldHasher\">FieldHasher</a>&lt;F, 2&gt;, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/smt/trait.StorageAdapter.html\" title=\"trait darkfi_sdk::crypto::smt::StorageAdapter\">StorageAdapter</a>&lt;Value = F&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html\" title=\"struct darkfi_sdk::crypto::smt::SparseMerkleTree\">SparseMerkleTree</a>&lt;'a, N, M, F, H, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#141\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","darkfi_sdk::crypto::smt::wasmdb::SmtWasmFp","darkfi_sdk::crypto::smt::SmtMemoryFp"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SparseMerkleTree%3C'a,+N,+M,+F,+H,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#159-292\">source</a><a href=\"#impl-SparseMerkleTree%3C'a,+N,+M,+F,+H,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const M: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, F: <a class=\"trait\" href=\"darkfi_sdk/crypto/smt/util/trait.FieldElement.html\" title=\"trait darkfi_sdk::crypto::smt::util::FieldElement\">FieldElement</a>, H: <a class=\"trait\" href=\"darkfi_sdk/crypto/smt/util/trait.FieldHasher.html\" title=\"trait darkfi_sdk::crypto::smt::util::FieldHasher\">FieldHasher</a>&lt;F, 2&gt;, S: <a class=\"trait\" href=\"darkfi_sdk/crypto/smt/trait.StorageAdapter.html\" title=\"trait darkfi_sdk::crypto::smt::StorageAdapter\">StorageAdapter</a>&lt;Value = F&gt;&gt; <a class=\"struct\" href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html\" title=\"struct darkfi_sdk::crypto::smt::SparseMerkleTree\">SparseMerkleTree</a>&lt;'a, N, M, F, H, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#169-172\">source</a><h4 class=\"code-header\">pub fn <a href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html#tymethod.new\" class=\"fn\">new</a>(store: S, hasher: H, empty_nodes: &amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[F; M]</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new SMT</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert_batch\" class=\"method\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#176-195\">source</a><h4 class=\"code-header\">pub fn <a href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html#tymethod.insert_batch\" class=\"fn\">insert_batch</a>(&amp;mut self, leaves: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(F, F)</a>&gt;) -&gt; <a class=\"type\" href=\"darkfi_sdk/error/type.ContractResult.html\" title=\"type darkfi_sdk::error::ContractResult\">ContractResult</a></h4></section></summary><div class=\"docblock\"><p>Takes a batch of field elements, inserts these hashes into the tree,\nand updates the Merkle root.</p>\n</div></details><section id=\"method.remove_leaves\" class=\"method\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#197-215\">source</a><h4 class=\"code-header\">pub fn <a href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html#tymethod.remove_leaves\" class=\"fn\">remove_leaves</a>(&amp;mut self, leaves: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(F, F)</a>&gt;) -&gt; <a class=\"type\" href=\"darkfi_sdk/error/type.ContractResult.html\" title=\"type darkfi_sdk::error::ContractResult\">ContractResult</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.root\" class=\"method\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#218-220\">source</a><h4 class=\"code-header\">pub fn <a href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html#tymethod.root\" class=\"fn\">root</a>(&amp;self) -&gt; F</h4></section></summary><div class=\"docblock\"><p>Returns the Merkle tree root.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.recompute_tree\" class=\"method\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#223-250\">source</a><h4 class=\"code-header\">fn <a href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html#tymethod.recompute_tree\" class=\"fn\">recompute_tree</a>(&amp;mut self, dirty_idxs: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://docs.rs/num-bigint/0.4/num_bigint/biguint/struct.BigUint.html\" title=\"struct num_bigint::biguint::BigUint\">BigUint</a>&gt;) -&gt; <a class=\"type\" href=\"darkfi_sdk/error/type.ContractResult.html\" title=\"type darkfi_sdk::error::ContractResult\">ContractResult</a></h4></section></summary><div class=\"docblock\"><p>Recomputes the Merkle tree depth first from the bottom of the tree</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prove_membership\" class=\"method\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#254-270\">source</a><h4 class=\"code-header\">pub fn <a href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html#tymethod.prove_membership\" class=\"fn\">prove_membership</a>(&amp;self, pos: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;F</a>) -&gt; <a class=\"struct\" href=\"darkfi_sdk/crypto/smt/struct.Path.html\" title=\"struct darkfi_sdk::crypto::smt::Path\">Path</a>&lt;N, F, H&gt;</h4></section></summary><div class=\"docblock\"><p>Give the path leading from the leaf at <code>index</code> up to the root. This is\na “proof” in the sense of “valid path in a Merkle tree”, not a ZK argument.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_leaf\" class=\"method\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#274-277\">source</a><h4 class=\"code-header\">pub fn <a href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html#tymethod.get_leaf\" class=\"fn\">get_leaf</a>(&amp;self, pos: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;F</a>) -&gt; F</h4></section></summary><div class=\"docblock\"><p>Fast lookup for leaf. The SMT can be used as a generic container for\nobjects with very little overhead using this method.</p>\n</div></details><section id=\"method.get_node\" class=\"method\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#279-283\">source</a><h4 class=\"code-header\">fn <a href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html#tymethod.get_node\" class=\"fn\">get_node</a>(&amp;self, idx: &amp;<a class=\"struct\" href=\"https://docs.rs/num-bigint/0.4/num_bigint/biguint/struct.BigUint.html\" title=\"struct num_bigint::biguint::BigUint\">BigUint</a>) -&gt; F</h4></section><section id=\"method.put_node\" class=\"method\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#285-287\">source</a><h4 class=\"code-header\">fn <a href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html#tymethod.put_node\" class=\"fn\">put_node</a>(&amp;mut self, key: <a class=\"struct\" href=\"https://docs.rs/num-bigint/0.4/num_bigint/biguint/struct.BigUint.html\" title=\"struct num_bigint::biguint::BigUint\">BigUint</a>, value: F) -&gt; <a class=\"type\" href=\"darkfi_sdk/error/type.ContractResult.html\" title=\"type darkfi_sdk::error::ContractResult\">ContractResult</a></h4></section><section id=\"method.remove_node\" class=\"method\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/smt/mod.rs.html#289-291\">source</a><h4 class=\"code-header\">fn <a href=\"darkfi_sdk/crypto/smt/struct.SparseMerkleTree.html#tymethod.remove_node\" class=\"fn\">remove_node</a>(&amp;mut self, key: &amp;<a class=\"struct\" href=\"https://docs.rs/num-bigint/0.4/num_bigint/biguint/struct.BigUint.html\" title=\"struct num_bigint::biguint::BigUint\">BigUint</a>) -&gt; <a class=\"type\" href=\"darkfi_sdk/error/type.ContractResult.html\" title=\"type darkfi_sdk::error::ContractResult\">ContractResult</a></h4></section></div></details>",0,"darkfi_sdk::crypto::smt::wasmdb::SmtWasmFp","darkfi_sdk::crypto::smt::SmtMemoryFp"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()