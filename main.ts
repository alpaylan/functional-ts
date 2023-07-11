
import { Set } from './Set';

let set = Set.mkEmptySet();
set = Set.add(set, 1);
set = Set.add(set, 2);
set = Set.add(set, 3);

let set2 = Set.mkEmptySet();
set2 = Set.add(set2, 4);

console.log(Set.contains(set, 1)); // true
console.log(Set.contains(set, 2)); // true
console.log(Set.contains(set, 3)); // true
console.log(Set.contains(set, 4)); // false
console.log(Set.contains(set2, 4)); // true

let set3 = Set.union(set, set2);
console.log(Set.contains(set3, 1)); // true
console.log(Set.contains(set3, 2)); // true
console.log(Set.contains(set3, 3)); // true
console.log(Set.contains(set3, 4)); // true
console.log(Set.contains(set3, 5)); // false

let set4 = Set.intersection(set, set2);
console.log(Set.isEmptySet(set4)); // true


