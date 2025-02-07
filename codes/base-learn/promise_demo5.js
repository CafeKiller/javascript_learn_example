function timerPromisefy (delay) {
    return new Promise( (resolve)=>{
        setTimeout(()=>{
            resolve(delay)
        }, delay)
    })
}

const statrDate = Date.now()

Promise.all([
    timerPromisefy(2),
    timerPromisefy(4),
    timerPromisefy(8),
    timerPromisefy(16),
    timerPromisefy(32),
    timerPromisefy(64),
    timerPromisefy(128),
]).then((values) => {
    console.log(Date.now() - statrDate + "ms");
    console.log("values", values);
})

Promise.race([
    timerPromisefy(2),
    timerPromisefy(4),
    timerPromisefy(8),
    timerPromisefy(16),
    timerPromisefy(32),
    timerPromisefy(64),
    timerPromisefy(128),
]).then((values) => {
    console.log(Date.now() - statrDate + "ms");
    console.log("values", values);
})



const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
        console.log("this is first")
        resolve("FIRST")
    }, 4)
})

const lastPromise = new Promise((resolve) => {
    setTimeout(() => {
        console.log("this is last")
        resolve("LAST")
    }, 400)
})

Promise.race([firstPromise, lastPromise]).then((value) => {
    console.log(
        "%c %s ", 
        "font-size: 32px; color: red; font-weight: 800; background-color: black;",
        value);
})