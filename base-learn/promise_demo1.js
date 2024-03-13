// 1 原始 resolve 写法
new Promise(function(resolve){
    resolve(42);
});
// 1 对应 resolv 语法糖写法
Promise.resolve(42).then(function(value){
    console.log(value);
});    

// 2 Promise.resolve 方法另一个作用就是将 thenable 对象转换为promise对象。
// jQuery.ajax()，它的返回值就是thenable的。 
// jQuery.ajax() 的返回值是 jqXHR Object 对象，这个对象具有 .then 方法。
var promise = Promise.resolve($.ajax('/json/comment.json'));// => promise对象
promise.then(function(value){
   console.log(value);
});



// 3 原始 reject 写法
new Promise(function(resolve,reject){
    reject(new Error("出错了"));
});
// 3 对应 reject 语法糖写法
Promise.reject(new Error("BOOM!")).catch(function(error){
    console.error(error);
});


// 4 promise chain
function taskA() {
    console.log("Task A");
    throw new Error("throw Error @ Task A")
}
function taskB() {
    console.log("Task B");// 不会被调用
}
function onRejected(error) {
    console.log(error);// => "throw Error @ Task A"
}
function finalTask() {
    console.log("Final Task");
}
var promise = Promise.resolve();
promise
    .then(taskA)
    .then(taskB)
    .catch(onRejected)
    .then(finalTask);


// 4 then 和 catch 在每次调用后都会返回一个 新的 promise 对象
function doubleUp(value) {
    return value * 2;
}
function increment(value) {
    return value + 1;
}
function output(value) {
    console.log(value);// => (1 + 1) * 2
}
var promise = Promise.resolve(1);
promise
    .then(increment)
    .then(doubleUp)
    .then(output)
    .catch(function(error){
        // promise chain中出现异常的时候会被调用
        console.error(error);
    });


// 5 在 IE8 中使用 catch 会报错. 通过这样的方式就可以规避
// promise#catch 的本质是 Promise(undefined, onReject) 的语法糖
var promise = Promise.reject(new Error("message"));
promise["catch"](function (error) {
    console.error(error);
});


