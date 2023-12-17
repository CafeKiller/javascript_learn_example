

const intersection_1 = (nums1, nums2) => {
    return [ ...new Set(nums1.filter( (it) => nums2.includes(it) ))]
}

const intersection_2 = (nums1, nums2) => {
    nums1.sort((a, b) => a - b )
    nums2.sort((a, b) => a - b )

    const length1 = nums1.length
    const length2 = nums2.length

    let index1 = 0
    let index2 = 0

    const intersection = []

    while (index1 < length1 && index2 < length2) {
        const num1 = nums1[index1]
        const num2 = nums2[index2]

        if (num1 === num2) {
            if (!intersection.length || num1 != intersection[intersection.length-1]) {
                intersection.push(num1)
            }
            index1++
            index2++
        } else if(num1 < num2){
            index1++
        } else {
            index2++
        }
    }
    return intersection
}

const intersection_3 = (nums1, nums2) => {
    if (nums1.length > nums2.length) {
        return intersection_3(nums1, nums2)
    }

    const nums1_set = new Set(nums1)
    const nums2_set = new Set(nums2)
    const intersection = new Set()

    for (let num of nums1_set) {
        if (nums2_set.has(num)) {
            intersection.add(num)
        }
    }

    return [ ...intersection ]
}