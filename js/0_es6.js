/*测试es6转es5语法*/
/*input.map(item => item + 1);
test:param=>1+1;*/

/*测试babel-node*/
/*console.log((x => x * 2)(1));*/

/*测试babelAPI*/
/*let es6Code = 'let x = n => n+1'
let babel = require('@babel/core')
let es5Code = babel.transform(es6Code,{
    "presets": [
        "@babel/env"
    ],
}).code;
console.log('es5Code',es5Code);*/

/*测试var与let区别*/
/*var a = [];
for(let i = 0;i<10;i++){
    a[i] = function(){
        console.log('i',i)
    }
}
a[6]();*/

/*变量提升*/
/*console.log('foo',foo)
var foo = '123'
console.log('bar',bar)
let bar = '123'*/

/*暂时性死区*/
/*var temp = "123"
if(true){
    temp = '156';
    console.log('temp',temp);
    let temp ;
}*/

/*var temp = new Date();
function f(){
    console.log('temp',temp);
    if(false){
        console.log('有执行！');
        var temp = 'hello';/!*变量提升*!/
    }
}
f();*/
/*{
    if(false){
        var temp = ''
    }
    console.log('temp',temp);
}*/
/*if(false){
    var temp = 'heilo'
}*/
/*console.log('temp',temp);*/
/*var a = '10';*/
/*(function(){
    var a = '666'
    console.log('立即执行');
})();*/
/*function test(){
    a = '123'
    console.log('执行');
}*/
// test();
/*console.log('a',a);*/

/**/
/*var a = '213\
   4522\
455'
console.log('aa',a)*/

// slice与splice比较
/*
var aa = [1,2,3,4,5,6,7,8,9]
var bb = ['aa','bb']
aa.splice(1,2,bb)
var s = '\u00A9';
// console.log('aa',aa.slice(0,5));
console.log('aa',aa);
console.log('s',s);
*/
/*var obj = {
    p1:'',
    p2:''
};
with (obj) {
    p1 = 4;
    p2 = 5;
}*/
/*console.log('obj.p1',obj.p1);
console.log('p1',p1);*/

/*var obj = {
    a1:'123',
    a2:''
}
var objj = {};
console.log('a1',obj.a1);
console.log('a1',obj['a1']);
console.log('Object.keys',Object.keys(obj));
delete obj.a1;
objj = obj;
console.log('Object.keys',Object.keys(objj));
console.log('in','a2' in objj)
console.log('hasOwnProperty',obj.hasOwnProperty('a2'))*/

/*var a = ({aa:123})
console.log('a',a.aa);*/
/*es3保护属性的私有性*/
/*
function g(){
    var obj = {//因为这相当于直接定义的一个常量，实时保存在内存中，违背了构造函数与实例分离的初衷，实例操作的属性，保存在了构造函数当中
        name:'黄淮'
    }
}
var bb = new g();
console.log('bb.obj',bb.obj);
/!*使用立即执行函数来*!/
var cc = function () {
    console.log('123');
}
*/
/*proxy代理*/
let Person = {
    sex:'male',
    age:23,
    name:'poppy'
}
let person = new Proxy(Person,{
    get(target, key) {
        return target[key]
    },
    set(target, key, value) {
        if(key!=='sex'){
            target[key] = value;
        }
    }

});
Person.sex = 'female'
console.log('name:',person.name)
console.log('sex:',person.sex)
console.log('age:',person.age)

/*function A(){
    this.name = '123';
}
if(!global.foo){
    global.foo = new A();
}
module.exports = global._foo;*/
