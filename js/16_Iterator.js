/*遍历器*/
/*function Obj(value) {
    this.value = value;
    this.next = null;
}
Obj.prototype[Symbol.iterator] = function() {
    var iterator = { next: next };
    var current = this;//指向的是Obj对象的原型对象
    function next() {
        if (current) {
            console.log('current......',current);
            var value = current.value;
            console.log('value......',value);
            current = current.next;
            return { done: false, value: value };
        } else {
            console.log('我觉得不会走这边');
            return { done: true };
        }
    }
    return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for (var i of one){
    console.log(i); // 1, 2, 3
}*/

/*var aa = ['1','2']
console.log(aa[Symbol.iterator]().next());
console.log(aa[Symbol.iterator]().next());*/

/*原型与实例上this指针问题*/
/*var Obj = function(){
    this.value ='123'
}
Obj.prototype.getThis = function () {
    console.log('this',this);
}
var test = new Obj();
test.getThis();
Obj.prototype.getThis();*/
