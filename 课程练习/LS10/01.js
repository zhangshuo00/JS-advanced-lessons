var superObj = {
    x:1,
    y:2
};
var subObj_first = Object.create(superObj);
var subObj_second = Object.create(superObj);
subObj_first.__proto__.x = 5;
console.log(subObj_second.x);
// 
function Person(name){
    this.name = name;
};
Person.prototype.age = 10;
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(id){
    this.id = id;
};
Student.prototype = new Person("mike");
var s1 = new Student(123123);
var s2 = new Student(123124);
console.log(s1.name,s1.age,s1.id);
console.log(s2.name,s2.age,s2.id);
s1.__proto__.name = 'jack';
console.log(s2.name);
s2.__proto__.__proto__.age = 33;
console.log(s2.age);

// 
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",20,2017002);

// 
function Animal(name,weight){
    this.name = name;
    this.weight = weight;
}
Animal.prototype.run = function(){
    console.log(this.name + ' can run');
}
function Bird(name,weight,color,height){
    Animal.call(this,name,weight);
    this.color = color;
    this.height = height;
}
Bird.prototype.__proto__ = Animal.prototype;
var b1 = new Bird('xx',10,'red',20);
b1.run();