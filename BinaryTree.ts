

export module BinaryTree {

    export const mkLeafTree = () => (
        {
            variant: "leaf"
        }
    )

    export const mkNodeTree = (elem, left, right) => (
        {
            variant: "node",
            elem: elem,
            left: left,
            right: right
        }
    )

    export const mkTreeFromElem = (elem) => (
        mkNodeTree(elem, mkLeafTree(), mkLeafTree())
    )

    export const isLeafTree = (tree) => (
        tree.variant === "leaf"
    )

    export const root = (tree) => (
        tree.elem
    )

    export const left = (tree) => (
        tree.left
    )

    export const right = (tree) => (
        tree.right
    )

    export const size = (tree) => (
        isLeafTree(tree) ? 0 : 1 + size(left(tree)) + size(right(tree))
    )

    export const map = (tree, f) => (
        isLeafTree(tree) ? mkLeafTree() : mkNodeTree(f(root(tree)), map(left(tree), f), map(right(tree), f))
    )

}