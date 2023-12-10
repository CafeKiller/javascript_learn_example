const swap = (array, a, b) => [
    [array[b], array[a]] = [array[a], array[b]]
]

const bubble_sort = (array) => {
    const length = array.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1)
            }
        }
    }

    return array
}

console.log(bubble_sort([-11, 22, 33, 33, 2]))