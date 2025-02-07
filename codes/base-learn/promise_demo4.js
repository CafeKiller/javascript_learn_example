// ÇëÇó
const requestObj = {
    comment: () => {
        return getURL('https://jsonplaceholder.typicode.com/todos/100').then(JSON.parse)
    },
    people: () => {
        return getURL('https://jsonplaceholder.typicode.com/users').then(JSON.parse)
    },
}

function getURL (URL) {
    return new Promise( (resolve, reject) => {
        const req = new XMLHttpRequest()
        req.open("GET", URL, true)
        req.onload = () => {
            if (req.status === 200) {
                resolve(req.responseText)
            } else {
                reject(req.statusText)
            }
        }
        req.onerror = () => {
            reject(new Error(req.statusText))
        }
        req.send()
    } )
}

function run () {
    function recordValue (results, value) {
        results.push(value)
        return results;
    }

    let pushValue = recordValue.bind(null, []);
    return requestObj.comment()
                     .then(pushValue)
                     .then(requestObj.people)
                     .then(pushValue)
}

run().then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.error(error);
})

function run_2() {
    return Promise.all([requestObj.comment(), requestObj.people()])
}

run_2().then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.error(error);
})