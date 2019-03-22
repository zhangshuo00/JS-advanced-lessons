//代码执行的上下文
//指的是代码执行的时候，相关的上下文环境
//函数的调用栈  this 的指向、作用域以及相关的变量
var a = 1;
var b = 2;
function fn1(){
    var  c=3;
    var d = 4;
    function fn2(){
        var e = 5;
        var f = 6;
    }
    fn2();
}
fn1();