/*异步编程解决方案*/
/*基本用法*/
/*let promise = new Promise(function (resolve123,reject) {
    if(true){
        resolve123('已完成！')
    }else{
        reject('已失败！')
    }
});
console.log('begin');
promise.then(function (value) {
    console.log('success:'+value);
},function (error) {
    console.log('failed:'+error);
});*/

/*例子*/
console.log('等待两秒执行开始！');
/*function timeOut() {
    return new Promise((resolve,reject )=>{
        setTimeout(function () {
            resolve('等待两秒执行完成！')
        },2000)
    })
}*/
/*timeOut().then(value => {
    console.log('result:'+value)
},error=>{
    console.log('result:'+error)
})*/

/*this指向问题*/
/*let obj = {
    aa:'123'
}
obj.test = function () {
    console.log('test::::::::',this.aa);
}
obj.test();*/

/*.then的链式写法*/
/*timeOut().then(function (value) {
    return timeOut()
},function (error) {
    console.log('error',error);
}).then(function (value) {
    console.log('getValue:',value)
})*/

/*.then返回的值*/
/*console.log('getValue:',timeOut().then(function (value) {
    /!*return timeOut()*!/
    return '123'
},function (error) {
    console.log('error',error);
}))*/

/*Promise.prototype.catch*/
/*function timeOut() {
    return new Promise((resolve,reject )=>{
        /!*setTimeout(function () {
            resolve('等待两秒执行完成！')
        },2000)*!/
        /!*throw new Error('12')*!/
        /!*reject(new Error('12'))*!/
    })
}
timeOut().then(function (value) {
    console.log('没有错误！',value);
}).catch(function (error) {
    console.log('抛出错误！',error);
})*/

/*const jsPromise = Promise.resolve('123');
var aa =
new Promise(function (resolve) {
    resolve('123')
})*/

/*Promise.resolve()*/
/*let thenable = {
    then:function () {
        console.log('then方法被调用！！！');
    }
}

let test = Promise.resolve(thenable)*/

/**/
/*const f = () => {
    setTimeout(function () {
        console.log('你好！！！');
    },3000)
};
(
    () => new Promise(
        resolve => resolve(f())
    )
)();
console.log('next');*/
/*$.get('xxx.com/getUserName',function(data){
    $.get('xxx.com/getMobile',{user:data.userName},function(data){
    });
});*/

/*使用Promise的好处一就是，数据获取与逻辑彻底分开，提高代码的可阅读性*/
/*function getUserName() {
    return new Promise(function (resolved,rejected) {
        $.get('xxx.com/getUserName',function(data){
            resolved(data)
        })
    })
}
function getMobile(value){
    return new Promise(function (resolved,rejected) {
        $.get('xxx.com/getUserName',{user:value.userName},function(data){
            resolved(data)
        })
    })
}
getUserName().then(value=>{
    getMobile(value)
}).then(value=>{
    console.log('最后的结果：',value);
})*/

/**/
/*const f = () => console.log('now');
Promise.try(f);
console.log('next');*/
