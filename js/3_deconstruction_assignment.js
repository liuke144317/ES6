/*数组解构*/
/*let [a,b,c] = [1,2,3]
console.log("a",a)
console.log("b",b)
console.log("c",c)*/

/*console.log([1][0])*/

/*对象解构*/
let person ={
    age:28,
    sex:"male",
    name:"Tom"
}
/*变量名与属性名一致*/
let {age,name} = person;
console.log('age',age);
console.log('name',name);
/*变量名与属性名不一致*/
let{age:NianLing,name:XingMing} = person;
console.log('NianLing',NianLing);
console.log('XingMing',XingMing);
