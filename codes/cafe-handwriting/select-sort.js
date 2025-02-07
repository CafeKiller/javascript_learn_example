const swap = (array, a, b) => [
    [array[b], array[a]] = [array[a], array[b]]
]

const select_sort = (array) => {
    const length = array.length

    for (let i = 0; i < length; i++) {
        let mid_idx = i

        for (let j = i+1; j < length; j++) {
            if (array[j] < array[mid_idx]) {
                mid_idx = j
            }
        }

        if (mid_idx !== 1) {
            swap(array, i, mid_idx)
        }
    }

    return array
}

console.log(select_sort([-11, 22, 33, 33, 2]))