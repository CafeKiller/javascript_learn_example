const insert_sort = (array) => {

    for (let i = 0, length = array.length; i < length; i++) {
        let j = i -1
        const cur_value = array[i]

        while(j >= 0 && array[j] > cur_value) {
            array[j+1] = array[j]
            j--
        }

        array[j+1] = cur_value
    }

    return array

}

console.log(insert_sort([-11, 22, 33, 33, 2]))