function findDifference(a, b) {
    const s = a.reduce((s,c) => s * c)
    const i = b.reduce((s,c) => s * c)
    return s > i ? s - i : i - s
}

console.log(findDifference([3, 2, 5], [1, 4, 4]))