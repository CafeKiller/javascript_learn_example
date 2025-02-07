const uniqueArray1 = (array) => {
    return { ...new Set(array)}
}

const uniqueArray2 = (array) => {
    let result = []
    array.forEach((it, i) => {
        if (result.indexOf(it) === -1) {
            result.push(it)
        }
    })
    return result
}

const uniqueArray3 = (array) => {
    return array.filter((it, i) => array.indexOf(it) === i)
}

const uniqueArray4 = (array) => {
    return Array.from(new Set(array))
}

let testArray = [1,2,3,1,2,3,4]

console.log(uniqueArray1(testArray))
console.log(uniqueArray2(testArray))
console.log(uniqueArray3(testArray))
console.log(uniqueArray4(testArray))
