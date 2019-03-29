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
    内层函数与外层函数作用域内相关联的变量
*/
function addNumber(start){
    return function(step){
        start += step;
        return start;
    }
}
