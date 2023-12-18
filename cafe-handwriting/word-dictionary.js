
let WordDictionary = function () {
    this.wordMap = {}
}

WordDictionary.prototype.addWord = function (word) {
    const len = word.length
    const list = this.wordMap[len] || []
    this.wordMap[len] = [...list, word]
}

WordDictionary.prototype.search = function (word) {
    const len = word.length
    if (!this.wordMap[len]) {
        return false
    }

    if (word.includes('.')) {
        const wordReg = new RegExp(word)
        return this.wordMap[len].some((item) => wordReg.test(item))
    } else {
        return this.wordMap[len].includes(word)
    }
}