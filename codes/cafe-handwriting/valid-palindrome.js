const isPalindrome = (str) => {
    str = str.replace(/[^a-zA-Z\d]/g, "").toLowerCase()

    const length = str.length
    let i = 0

    while (i < length / 2) {
        if(str[i] !== str[str.length-1-i]) {
            return false
        }
        i++
    }
    return true
}



const validPalindrome = (s) => {
    const isPalindrome = (start, end) => {
        while(start < end) {
            if(s[start] !== s[end]) {
                return false
            }
            start++
            end--
        }
        return true
    }

    let i = 0
    let j = s.length-1

    while(i < j && s[i] === s[j]) {
        i++
        j--
    }

    if (isPalindrome(i+1, j)) {
        return true
    }

    if (isPalindrome(i, j-1)) {
        return  true
    }

    return false

}