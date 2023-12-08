const quick_sort = (array) => {
    const length = array.length
    if (length <= 1) {
        return array
    }

    const mid_index = Math.floor(length / 2)
    const mid_value = array.splice(mid_index, 1)[0]
    let left_array = []
    let right_array = []
    let index = 0

    while(index < length -1) {
        const cur_value = array[index]

        if (cur_value <= mid_value) {
            left_array.push(cur_value)
        } else {
            right_array.push(cur_value)
        }
        index ++
    }

    return quick_sort(left_array).concat([mid_value], quick_sort(right_array))
}

const arr = [-10, 10, 1, 34, 5, 1]
console.log(quick_sort(arr))