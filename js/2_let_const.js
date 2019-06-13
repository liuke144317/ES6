// var a = [];
/*for(var i = 0;i<10;i++){
    a[i] = i;
}*/
/*for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]()*/
/**
 * 上面两个循环的差别是什么，i在里面不都是变量吗，两者的a[i]部分都是相同的，所以会有0-9个元素的数组，变化的都是
 * 方法里面的i，在最后都变为了10，a[i]变的原因就是i为不同值时，生成了不同的数组内容，第一个循环的a数组值变化是
 * 因为...，其实没这么复杂，是因为方法里面的值是运行时确定的。
 */
// console.log(a);

/*暂时性死锁*/
/*if(true){
    a = 2;
    console.log(a)
    let a;
}*/
/*function aa(aa){
    console.log(aa)
}
aa(1);*/
/*let a = 10;
const a = 10;*/

/*块级作用域*/
/*var tmp = new Date();

function f() {
    console.log(tmp);//与if中的tmp，处于同一函数作用域
    if (false) {
        var tmp = 'hello world';
    }
}
console.log('tmp',tmp)//函数作用域之外

f(); // undefined*/
