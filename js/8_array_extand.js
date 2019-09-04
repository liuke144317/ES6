/*
let arr = [];
arr.push(1,2)
console.log(arr);
*/

/*扩展运算符：将arr2添加到arr1的尾部*/
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// console.log(arr1.concat(arr2));
/*es5*/
/*Array.prototype.push.apply(arr1,arr2);
console.log(arr1);*/
/*es6*/
/*arr1.push(...arr2)
arr2[0] = 5;
console.log(arr1)*/

let arr = [1,2,6,5,4]
console.log(arr.slice(1));
