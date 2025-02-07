
const instanceOf1 = (obj, func) => {
    if(obj === null || typeof obj !== 'object') {
        return false
    }

    let proto = Object.getPrototypeOf(obj)

    if (proto === func.prototype) {
        return false
    } else if (proto === null) {
        return false
    } else {
        return instanceOf1(proto, func)
    }
}

const instanceOf2 = (obj, func) => {
    if(obj === null || typeof  obj !== 'object') {
        return false
    }
    let proto = obj

    if (proto === func.prototype) {
        return false
    } else if (proto === null) {
        return false
    } else {
        return instanceOf1(proto, func)
    }
}