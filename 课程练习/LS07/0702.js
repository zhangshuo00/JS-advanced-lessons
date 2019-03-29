//闭包：通过在函数（fn1）内部定义函数（fn2）来访问
//在父函数（fn1）当中定义的局部变量（x）
function fn1() {
    var x = 1;
    function fn2(){
        return ++x;
    }
    return fn2;
}
var result = fn1();
result();//2

/*形成闭包的条件：
    外层定义的函数（addNumber），内层定义的函数（）、
    内层函数与外层函数作用域内相关联的变量(start)

    闭包的作用：
    1.可以访问到函数（addNumber）内部定义的局部变量(start)
    2.可以让相关联的变量（start）保持在内存中，不释放
*/
function addNumber(start){
    return function(step){
        start += step;
        return start;
    }
}
var result = addNumber(10);
console.log(result(1));//11
console.log(result(1));//12
console.log(result(3));//15

//
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1

var tmp = 100;
function foo(x){
    var tmp = 3;
    return function(y){
        console.log(x+y+(++tmp));
    }
}
var fee = foo(2);
fee(10);
fee(10);
fee(10);
