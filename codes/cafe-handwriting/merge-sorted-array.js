

const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n =3

const merge = (num1, m, num2, n) => {
    let i = m - 1
    let j = n - 1
    let k = m + n -1

    while (i >= 0 && j >= 0) {
        if (num1[i] > num2[j]) {
            num1[k] = num1[i]
            i--
            k--
        } else {
            num1[k] = num2[j]
            j--
            k--
        }
    }

    while (j >= 0) {
        num1[j] = num2[j]
        j--
    }

    return num1
}