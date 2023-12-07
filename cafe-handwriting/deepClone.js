const deepClone = (target, cache = new Map()) => {
    const isObject = (obj) => typeof obj === "object" && obj !== null

    if (isObject(target)) {
        const cacheTarget = cache.get(target)

        if(cacheTarget) {
            return cacheTarget
        }

        let cloneTarget = Array.isArray(target) ? [] : {}

        cache.set(target, cloneTarget)

        for(const key in target) {
            const value = target[key]
            cloneTarget[key] = isObject(value) ? deepClone(value, cache) : value
        }

        return cloneTarget

    } else {
        return target
    }

}