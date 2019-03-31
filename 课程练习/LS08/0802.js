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