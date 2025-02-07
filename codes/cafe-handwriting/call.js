Function.prototype.myCall = function (ctx, ...args) {
    if(!ctx) {
        ctx = typeof window !== "undefined" ? window : global
    }

    ctx = Object(ctx)

    const fnName = Symbol('key')

    ctx[fnName] = this

    const result = ctx[fnName](...args)

    delete ctx[fnName]

    return result
}

let fn = function (name, sex) {
    console.log(this, name, sex)
}

fn.myCall("", "咖啡Killer", "boy")