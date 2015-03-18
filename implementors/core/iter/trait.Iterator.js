(function() {var implementors = {};
implementors['ordered_iter'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;A, B&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='ordered_iter/struct.InnerJoinMapIterator.html' title='ordered_iter::InnerJoinMapIterator'>InnerJoinMapIterator</a>&lt;A, B&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;A, B&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='ordered_iter/struct.InnerJoinSetIterator.html' title='ordered_iter::InnerJoinSetIterator'>InnerJoinSetIterator</a>&lt;A, B&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;MapIter, SetIter&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='ordered_iter/struct.InnerJoinMapSetIterator.html' title='ordered_iter::InnerJoinMapSetIterator'>InnerJoinMapSetIterator</a>&lt;MapIter, SetIter&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;A, B&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='ordered_iter/struct.OuterJoinIterator.html' title='ordered_iter::OuterJoinIterator'>OuterJoinIterator</a>&lt;A, B&gt;",];implementors['collect'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.Iter.html' title='collect::tree_map::Iter'>Iter</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.RevIter.html' title='collect::tree_map::RevIter'>RevIter</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.IterMut.html' title='collect::tree_map::IterMut'>IterMut</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.RevIterMut.html' title='collect::tree_map::RevIterMut'>RevIterMut</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.IntoIter.html' title='collect::tree_map::IntoIter'>IntoIter</a>&lt;K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.Keys.html' title='collect::tree_map::Keys'>Keys</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.Values.html' title='collect::tree_map::Values'>Values</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.Iter.html' title='collect::tree_set::Iter'>Iter</a>&lt;'a, T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.RevIter.html' title='collect::tree_set::RevIter'>RevIter</a>&lt;'a, T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.IntoIter.html' title='collect::tree_set::IntoIter'>IntoIter</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.Difference.html' title='collect::tree_set::Difference'>Difference</a>&lt;'a, T, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.SymmetricDifference.html' title='collect::tree_set::SymmetricDifference'>SymmetricDifference</a>&lt;'a, T, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.Intersection.html' title='collect::tree_set::Intersection'>Intersection</a>&lt;'a, T, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.Union.html' title='collect::tree_set::Union'>Union</a>&lt;'a, T, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/immut_slist/struct.Iter.html' title='collect::immut_slist::Iter'>Iter</a>&lt;'a, T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/interval_heap/struct.Iter.html' title='collect::interval_heap::Iter'>Iter</a>&lt;'a, T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.Iter.html' title='collect::tree_map::Iter'>Iter</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.RevIter.html' title='collect::tree_map::RevIter'>RevIter</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.IterMut.html' title='collect::tree_map::IterMut'>IterMut</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.RevIterMut.html' title='collect::tree_map::RevIterMut'>RevIterMut</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.IntoIter.html' title='collect::tree_map::IntoIter'>IntoIter</a>&lt;K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.Keys.html' title='collect::tree_map::Keys'>Keys</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_map/struct.Values.html' title='collect::tree_map::Values'>Values</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.Iter.html' title='collect::tree_set::Iter'>Iter</a>&lt;'a, T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.RevIter.html' title='collect::tree_set::RevIter'>RevIter</a>&lt;'a, T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.IntoIter.html' title='collect::tree_set::IntoIter'>IntoIter</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.Difference.html' title='collect::tree_set::Difference'>Difference</a>&lt;'a, T, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.SymmetricDifference.html' title='collect::tree_set::SymmetricDifference'>SymmetricDifference</a>&lt;'a, T, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.Intersection.html' title='collect::tree_set::Intersection'>Intersection</a>&lt;'a, T, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/tree_set/struct.Union.html' title='collect::tree_set::Union'>Union</a>&lt;'a, T, C&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K: 'a, V: 'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/proto/linear_map/struct.Iter.html' title='collect::proto::linear_map::Iter'>Iter</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K: 'a, V: 'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/proto/linear_map/struct.IterMut.html' title='collect::proto::linear_map::IterMut'>IterMut</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K: 'a, V: 'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/proto/linear_map/struct.Keys.html' title='collect::proto::linear_map::Keys'>Keys</a>&lt;'a, K, V&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, K: 'a, V: 'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='collect/proto/linear_map/struct.Values.html' title='collect::proto::linear_map::Values'>Values</a>&lt;'a, K, V&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
