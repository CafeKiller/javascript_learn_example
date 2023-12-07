const _new = function (func, ...args) {
    if (typeof func !== "function") {
        throw "func must be a function"
    }

    let obj = Object.create(func.prototype)

    let result = func.apply(obj, args)

    if (typeof  result === "object" && result !== null || typeof result === "function") {
        return result
    } else {
        return obj
    }
}

let Person = function (name, sex) {
    this.name = name
    this.sex = sex
}

Person.prototype.showInfo = function () {
    console.log(this.name, this.sex)
}

let p1 = _new(Person, "CafeKiller", "sex" )
console.log(p1)