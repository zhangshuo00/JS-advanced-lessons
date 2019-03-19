//对象 instanceof 构造函数
//1. 判断对象是否可以使用构造函数实例化得到
function Person(username,age){
    this.username = username;
    this.age = age;
}
var person = new Person("zhangsan",20);
console.log(person);
console.log(person.__proto__ == Person.prototype);//true
person instanceof Person;

//
function fn1(x){
    //length 表示的是函数的形参个数
    //arguments 是函数调用时，实参类数组集合
    console.log(fn1.length);
    for(var i = 0;i<arguments.length;i++){}
}
function fn2(){
    console.log(fn2.caller);
}
function fn3(){
    fn2();
}
var  objA = {"objName":"AAA"};
var objB = {"objName":"BBB"};
objA.foo = function(){
    console.log(this.objName);
}
objA.foo();
//方法.call()
objA.foo.call(objA);

function swim(m,n){
    console.log("i'm:"+this.name+"i can swim __",m,n);
}
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+"i can fly __",m,n);
    }
};
var me = {
    name:"ABC"
};
swim(1,2);
swim.call(me,3,4);
bird.fly(5,6);
bird.fly.call(me,7,8);
bird.fly.apply(me,[7,8]);
swim.call(null,1,2);

