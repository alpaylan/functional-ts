import { BinarySearchTree } from "./BinarySearchTree";


export module Set {
    export const mkEmptySet = BinarySearchTree.mkLeafTree;
    export const isEmptySet = BinarySearchTree.isLeafTree;
    export const add = BinarySearchTree.insert;
    export const contains = BinarySearchTree.contains;
    export const fromList = BinarySearchTree.fromList;
    export const toList = BinarySearchTree.toList;

    const left = BinarySearchTree.left;
    const right = BinarySearchTree.right;
    const root = BinarySearchTree.root;

    export const union = (set1, set2) => (
        isEmptySet(set1) ?
            set2
            : isEmptySet(set2) ?
                set1
                : add(union3(left(set1), right(set1), set2), root(set1))
    )

    export const union3 = (set1, set2, set3) => (
        union(union(set1, set2), set3)
    )

    export const intersection = (set1, set2) => (
        isEmptySet(set1) ?
            mkEmptySet()
            : isEmptySet(set2) ?
                mkEmptySet()
                : contains(set2, root(set1)) ?
                    add(intersection(union(left(set1), right(set1)), set2), root(set1))
                    : intersection(union(left(set1), right(set1)), set2)
    )

    export const difference = (set1, set2) => (
        isEmptySet(set1) ?
            mkEmptySet()
            : isEmptySet(set2) ?
                set1
                : contains(set2, root(set1)) ?
                    difference(union(left(set1), right(set1)), set2)
                    : add(difference(union(left(set1), right(set1)), set2), root(set1))
    )




}