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
var aa = [1,2,3,4,5,6,7,8,9]
var bb = ['aa','bb']
aa.splice(1,2,bb)
var s = '\u00A9';
// console.log('aa',aa.slice(0,5));
console.log('aa',aa);
console.log('s',s);
