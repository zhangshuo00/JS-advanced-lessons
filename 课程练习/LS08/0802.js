var name = "zhangsan";
function echo() {
    console.log(name);
}
function foo() {
    var name = "lisi";
    echo();
}
foo();//zhangsan

//全局变量与局部变量
var x = "aa";
var f1 = function() {
    //var x = "bb";
    console.log(x);
}
f1();
console.log(x);

//
var f2 = function (){
    //var y = "局部";
    y = "全局";
    console.log(y);
};
f2();
console.log(y);//函数内的变量前有var ,则此行报错：y not defined
//没有var 则此行输出全局变量y值

if(true){
    (function (){ //IIFE start
        var z = 2;
    }()); //IIFE end
}
console.log(z);//z is not defined
/*IIFE 立即执行函数表达式
1.当解释器对代码进行解释的时候，先碰到()，然后碰到function关键字
会将()内的代码识别为函数表达式，不是函数声明

2.括号和一些操作符，可以在函数表达式和函数声明上消除歧义

3.立即执行函数能配合闭包保存状态
*/
function fn(){
    var i = 1;
    return function(){
        console.log(++i);
    }
}
fn();
var foo = fn();
foo();//2
foo();//3
//foo 和 foo1 是两个不同的实例，分别拥有不同范围内的i变量
var foo1 = fn();
foo1();//2
foo1();//3