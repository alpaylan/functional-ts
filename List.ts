
export module List {

    export const mkEmptyList = () => (
        {
            variant: "nil"
        }
    )

    export const mkList = (elem, rest) => (
        {
            variant: "cons",
            elem: elem,
            rest: rest
        }
    )

    export const mkListFromElem = (elem) => (
        mkList(elem, mkEmptyList())
    )

    export const isEmptyList = (list) => (
        list.variant === "nil"
    )

    export const head = (list) => (
        list.elem
    )

    export const tail = (list) => (
        list.rest
    )

    export const length = (list) => (
        isEmptyList(list) ? 0 : 1 + length(tail(list))
    )

    export const map = (list, f) => (
        isEmptyList(list) ? mkEmptyList() : mkList(f(head(list)), map(tail(list), f))
    )

    export const filter = (list, f) => (
        isEmptyList(list) ?
            mkEmptyList()
            : f(head(list)) ?
                mkList(head(list), filter(tail(list), f))
                : filter(tail(list), f)
    )

    export const reduce = (list, f, acc) => (
        isEmptyList(list) ? acc : reduce(tail(list), f, f(acc, head(list)))
    )

    export const reverse = (list) => (
        reduce(list, (acc, elem) => mkList(elem, acc), mkEmptyList())
    )

    export const concat = (list1, list2) => (
        isEmptyList(list1) ? list2 : mkList(head(list1), concat(tail(list1), list2))
    )

    export const concat3 = (list1, list2, list3) => (
        concat(list1, concat(list2, list3))
    )

    export const take = (list, n) => (
        n === 0 || isEmptyList(list) ? mkEmptyList() : mkList(head(list), take(tail(list), n - 1))
    )

    export const drop = (list, n) => (
        n === 0 || isEmptyList(list) ? list : drop(tail(list), n - 1)
    )

    export const prepend = (list, elem) => (
        mkList(elem, list)
    )

    export const append = (list, elem) => (
        concat(list, mkListFromElem(elem))
    )

    export const nth = (list, n) => (
        n === 0 ? head(list) : nth(tail(list), n - 1)
    )

    export const last = (list) => (
        nth(list, length(list) - 1)
    )

}