//非严格模式下的this
var x =1;
var y = 2;
alert(window.x);
// this 取决于所在函数的调用主体
function thisTest(){
    console.log(this);
}
thisTest();

// 严格模式下的this
function thisTest(){
    "use strict";
    console.log(this);
    return this == undefined ? true:false;
}
thisTest();

var point = {
    x:1,
    y:2,
    moveTo:function(x,y){
        this.x = x;
        this.y = y;
    }
}
point.moveTo(10,10);

// 函数或者方法的内部this指向，取决于该函数的调用主体
function Point(x,y){
    this.x = x;
    this.y = y;
    this.moveTo = function(x,y){
        this.x = x;
        this.y = y;
    }
}
var p = new Point(1,2);
p.moveTo(3,3);

var objA = {name:'zhangsan',x:1};
var objB = {name:'lisi',x:2};
function test(){
    console.log(this.name,this.x);
}
objA.fun = test;
objA.fun();
// 函数也是对象，函数对象的构造函数 function 函数对象的原型对象.__proto__ == Function.prototype
objA.fun.call();

// 方法.call(函数调用主体对象，arg1，arg2)
objA.fun.call(objB,'cc');

var animal = {weight:"",name:"animal"};
var dog = {height:"100",name:"lisi"};

animal.breath = function(){
    console.log(this.name + 'can breath');
}