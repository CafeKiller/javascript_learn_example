const splitMobile = (mobile, format = '-') => {
    return String(mobile).replace(/(?=(\d{4})+$)/g, format)
}

const splitMobile2 = (mobile, format = '-') => {
    return String(mobile).replace(/(?<=(\d{3}))/, format).replace(/(?<=([\d\-]{8}))/, format)
}

console.log(splitMobile(18330328881))
console.log(splitMobile2(18330328881))