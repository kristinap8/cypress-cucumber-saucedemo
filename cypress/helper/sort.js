export function sortNumbersAsc(array) {
    return array.toSorted(function compareFn(a, b) {
        return a - b;
    })
}

export function sortNumbersDesc(array) {
    return array.toSorted(function compareFn(a, b) {
        return b - a;
    })
}

export function sortWordsAsc(array) {
    return array.toSorted();
}

export function sortWordsDesc(array) {
    return array.toSorted().toReversed();
}