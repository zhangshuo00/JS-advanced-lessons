/**对象 instanceof 构造函数
 * 判断对象是否可以使用构造函数实例化得到
 * 判断在对象的原型链上能否找到构造函数的原型
 * 
 * 对象.__proto__ == 构造函数.prototype
 */
console.log(Object instanceof Function);//true
console.log(Object.__proto__ == Function.prototype);//true

console.log(Object instanceof Object);//true

function Person(username,age){
    this.username = username;
    this.age = age;
}
var p = new Person("lisi",20);
console.log(p.__proto__ == Person.prototype);
console.log(p.__proto__.__proto__);

var o = {
    _x : 1,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
}
o.x = 10;
console.log(o._x,o.x);

var obj = {
    num:10,
    str:'hello',
    show:function(){
        console.log(this.str);
    }
}
//Object.create(obj);
//创建一个新对象，并且将obj对象作为新对象的__proto__
var subObject = Object.create(obj);
console.log(subObject);
console.log(subObject.__proto__ == obj);