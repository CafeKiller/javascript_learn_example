const removeDuplicate = (nums) => {
    if (nums.length === 0 || nums.length === 1) {
        return nums.length
    }

    const len = nums.length

    let slow = 0
    let fast = 1

    while(fast < len) {
        if (nums[slow] !== nums[fast]) {
            nums[++slow] = nums[fast]
        }
        fast++
    }
    return slow
}

let nums = [0,0,1,2,1,3,3,3,4]
console.log(removeDuplicate(nums))