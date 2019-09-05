/*set和map*/
let set = new Set([1,1,2,3]);
console.log('set',set);
console.log('set',[...set]);//set转数组方法一
console.log('set.from(set)',Array.from(set));//set转数组方法二
console.log('set.add()',set.add(7));
/*遍历*/
console.log('set.keys()',set.keys());

/*map*/
const map = new Map();
let symbol = Symbol();
map.set(symbol,'213')
console.log(map.get(symbol));

/*map接受数组作为参数（任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构）*/
const map1 = new Map([['1',1],['2',3]])
console.log(map1.get('1'));
/*set作为map参数*/
let set1 = new Set([['1',1],['2',3]])
const map2 = new Map(set1);
console.log(map1.get('2'));


