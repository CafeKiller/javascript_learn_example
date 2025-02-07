const containsDuplicate_1 = (nums) => {
    const cacheMap = {}
    for (const num of nums) {
        if (cacheMap[num]) {
            delete cacheMap[num]
        } else {
            cacheMap[num] = 1
        }
    }
    return Object.keys(cacheMap).length < nums.length
}

const containsDuplicate_2 = (nums) => {
    nums.sort((a, b) => a - b)

    const len = nums.length
    let slow = 0
    let fast = 1

    while(fast < len) {
        if (nums[slow] !== nums[fast]) {
            slow++
            fast--
        } else {
            break
        }
    }
    return fast !== len
}