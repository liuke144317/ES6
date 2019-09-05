/*独一无二的值*/
let mysymbol = Symbol();

console.log(mysymbol);
console.log(typeof mysymbol);
var obj = {
    mysymbol:'000',
    [mysymbol]:'123'
}
console.log('obj[mysymbol]',obj[mysymbol]);
console.log('obj[mysymbol]',obj.mysymbol);

/*获取symbol值*/
for(let i in obj){//无法获取
    console.log('i',i);
}
console.log('Object.getOwnPropertyName',Object.getOwnPropertyNames(obj));//无法获取
console.log('Object.getOwnPropertySymbols',Object.getOwnPropertySymbols(obj));//可获取
console.log('Reflect.ownKeys(obj)',Reflect.ownKeys(obj));//可获取

/*const a = require('./0_es6.js');
console.log('a',a);*/

let arr1 = [1,2]
let arr2 = [6,5]
arr2[Symbol.isConcatSpreadable] = true
arr1.push(arr2);
console.log('arr1',arr1);



