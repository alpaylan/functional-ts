

import { List } from './List'
import { BinaryTree } from './BinaryTree';

export module BinarySearchTree {

    export const mkLeafTree = BinaryTree.mkLeafTree;
    export const mkNodeTree = BinaryTree.mkNodeTree;
    export const root = BinaryTree.root;
    export const left = BinaryTree.left;
    export const right = BinaryTree.right;
    export const isLeafTree = BinaryTree.isLeafTree;


    export const insert = (tree, elem) => (
        BinaryTree.isLeafTree(tree) ?
            BinaryTree.mkTreeFromElem(elem)
            : elem < BinaryTree.root(tree) ?
                mkNodeTree(root(tree), insert(left(tree), elem), right(tree))
                : mkNodeTree(root(tree), left(tree), insert(right(tree), elem))
    )

    export const contains = (tree, elem) => (
        isLeafTree(tree) ?
            false
            : elem === root(tree) ?
                true
                : elem < root(tree) ?
                    contains(left(tree), elem)
                    : contains(right(tree), elem)
    )

    export const fromList = (list) => (
        List.reduce(list, (acc, elem) => insert(acc, elem), mkLeafTree())
    )

    export const toList = (tree) => (
        isLeafTree(tree) ?
            List.mkEmptyList()
            : List.concat(toList(left(tree)), List.mkList(root(tree), toList(right(tree))))
    )
}

