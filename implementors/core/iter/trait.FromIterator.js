(function() {var implementors = {};
implementors['collect'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;K, V, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='collect/struct.TreeMap.html' title='collect::TreeMap'>TreeMap</a>&lt;K, V, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collect/struct.TreeSet.html' title='collect::TreeSet'>TreeSet</a>&lt;T, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>, T)</a>&gt; for <a class='struct' href='collect/struct.TrieMap.html' title='collect::TrieMap'>TrieMap</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>&gt; for <a class='struct' href='collect/struct.TrieSet.html' title='collect::TrieSet'>TrieSet</a>","<a class='stability Stable' title='Stable'></a>impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collect/blist/struct.BList.html' title='collect::blist::BList'>BList</a>&lt;A&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;E: <a class='trait' href='collect/enum_set/trait.CLike.html' title='collect::enum_set::CLike'>CLike</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='collect/enum_set/struct.EnumSet.html' title='collect::enum_set::EnumSet'>EnumSet</a>&lt;E&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collect/immut_slist/struct.ImmutSList.html' title='collect::immut_slist::ImmutSList'>ImmutSList</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T, C: <a class='trait' href='collect/compare/trait.Compare.html' title='collect::compare::Compare'>Compare</a>&lt;T&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collect/interval_heap/struct.IntervalHeap.html' title='collect::interval_heap::IntervalHeap'>IntervalHeap</a>&lt;T, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;K: <a class='trait' href='http://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a>, V, S: <a class='trait' href='http://doc.rust-lang.org/nightly/std/collections/hash/state/trait.HashState.html' title='std::collections::hash::state::HashState'>HashState</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='collect/linked_hash_map/struct.LinkedHashMap.html' title='collect::linked_hash_map::LinkedHashMap'>LinkedHashMap</a>&lt;K, V, S&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;K, V, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='collect/struct.TreeMap.html' title='collect::TreeMap'>TreeMap</a>&lt;K, V, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collect/struct.TreeSet.html' title='collect::TreeSet'>TreeSet</a>&lt;T, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>, T)</a>&gt; for <a class='struct' href='collect/struct.TrieMap.html' title='collect::TrieMap'>TrieMap</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>&gt; for <a class='struct' href='collect/struct.TrieSet.html' title='collect::TrieSet'>TrieSet</a>","<a class='stability Stable' title='Stable'></a>impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collect/proto/dlist/struct.DList.html' title='collect::proto::dlist::DList'>DList</a>&lt;A&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
