const intersect = (num1, num2) => {
    const cacheMap = {}
    const len1 = num1.length
    const len2 = num2.length

    let result = []

    for (let i = 0; i<len1; i++) {
        const value = cacheMap[nums[i]]
        cacheMap[nums[i]] = typeof value !== 'undefined' ? value + 1 : 1
    }

    for (let j = 0; j< len2; j++) {
        const count = cacheMap[num2[j]]
        if (count) {
            result.push(num2[j])
            cacheMap[nums2[j]]--
        }
    }

    return result
}

const intersect_2 = (nums1, nums2) => {
    const len1 = nums1.length
    const len2 = nums2.length
    let i = 0
    let j = 0
    let result = []

    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)

    while(i < len1 && j < len2) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i])
            i++
            j++
        } else if (nums1[i] < nums2[j]) {
            i++
        } else {
            j++
        }
    }
    return result
}

