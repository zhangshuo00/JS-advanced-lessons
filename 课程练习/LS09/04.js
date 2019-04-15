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
//定义一个car对象，有属性height,width,weight,再定义一个smallCar对象，自身具有color，seatNum属性
//让smallCar继承car的所有属性，使用create方法和构造函数实现
var car = {
    height:110,
    width:100,
    weight:2300
};
function CreateSmallCar(color,seatNum){
    this.color = color;
    this.seatNum  = seatNum;
}
CreateSmallCar.prototype = car;
var smallCar = new CreateSmallCar('red',4);
console.log(smallCar.__proto__ == CreateSmallCar.prototype);