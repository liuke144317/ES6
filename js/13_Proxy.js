/*代理*/
let target = {};
let handler = {
    get:function (target,property,item) {
        console.log('target',target);
        // console.log('item',item);
        return property;
    }
};
let proxy = new Proxy(target,handler);
proxy.a = '213';
console.log('proxy.a',proxy.a)
/*proxy.b = '513';;
console.log('proxy.a',proxy.c);*/

/*Proxy()实例get方法的使用*/
/*
let proxy = new Proxy({},{
    get:function (target,property,item) {
        if(property in target){
            return target[property]
        }else{
            throw new ReferenceError('你是傻逼吧，没有这个属性')
        }
    }
});
proxy.a
*/
/*只有当继承对象上没有属性而访问原型对象时，才会使用原型对象上的代理*/
/*let proto = new Proxy({}, {
    get(target, propertyKey, receiver) {
        console.log('GET ' + propertyKey);
        return target[propertyKey];
    }
});
let obj = Object.create(proto);
obj.foo = '123';
console.log('obj.foo;',obj.foo);*/

