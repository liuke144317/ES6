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
var a = [];
for(let i = 0;i<10;i++){
    a[i] = function(){
        console.log('i',i)
    }
}
a[6]();
