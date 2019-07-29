var obj = {
    p:12,
    f1:function () {//这个function是obj中f1属性指向的地址中的function
        console.log('this.p', this.p);
        /*(function(){
            console.log('this.p', this.p)
        })();*/
        function a(){//这个function跟obj对象没有直接的关联，属于内存中某个地址中的function
            console.log('this.p', this.p)
        }
        a();
    }

}
obj.f1()
