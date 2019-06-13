/*babel API转码*/
var babel = require('@babel/core')
var codeES6 = 'let x = n => n+1'
var codeES5 = babel.transform(codeES6,{
  presets: ['@babel/env']
}).code;
console.log(codeES5)
/*babel-polyfill并没有引用*/
var obj = {
  0:'xiaoming',
  1:'xiaohong',
  length:2
}
let arr = Array.from(obj)
console.log('arr',arr);
