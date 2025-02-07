const two_sum = (nums, target) => {
    const cache_map = {}

    for (let i = 0, len =nums.length; i < len; i++) {
        const diff = target - nums[i]

        if (cache_map[diff] != undefined) {
            return [cache_map[diff], i]
        } else {
            cache_map[nums[i]] = i
        }
    }
}

console.log(two_sum([ 2, 7, 11, 15 ], 22))