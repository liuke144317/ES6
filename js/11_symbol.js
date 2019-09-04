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
