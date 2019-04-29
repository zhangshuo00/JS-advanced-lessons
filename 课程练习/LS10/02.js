function BaseClass(){

}
BaseClass.fn1 = function(){
    console.log('静态方法');
}
BaseClass.prototype.fn2 = function(){
    console.log('原型方法');
}
BaseClass.fn1();
var base = new BaseClass();
base.fn2();

// Object.create()
// Object.defineProperty()
function Foo(){}
Foo.prototype.constructor == Foo;
var foo = new Foo();
foo.constructor == Foo;
/**如果直接给构造函数的 prototype属性赋值，会覆盖掉prototype上的constructor */

var foo1 = new foo.constructor();
Foo.prototype = {};