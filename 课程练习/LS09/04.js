var obj1 = {z:1};
var obj2 = Object.create(obj1);

Object.prototype.sayHello = function(){
    console.log('hello world');
}
//原型链的尽头
console.log(obj2.__proto__.__proto__.__proto__);
obj2.sayHello();
function Person(username,age){
    this.username = username;
    this.age = age;
    this.sayHello = function(){
        console.log('hello world');
    }
}
var person1 = new Person('zhangsan',1);
var person2 = new Person('lisi',2);
console.log(person1.__proto__ == Person.prototype);
console.log(person1,person2);

//节省内存空间
Person.prototype.sayHello = function(){
    console.log('hello world');
}
var person1 = new Person('zhangsan',1);
var person2 = new Person('lisi',2);
//
function Person(username,age){
    this.username = username;
    this.age = age;
}
Person.prototype.sayHello = function(){
    console.log('hello world');
}
var person1 = new Person('zhangsan',1);