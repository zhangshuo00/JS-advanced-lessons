//Part01
function foo(){
    var n = 10;
    var m = true;
    var str = "hello world";//存在栈中
    var obj = {
        value:'hello world'
    };
}
foo();//obj的引用存在栈中，

//Part02
//在执行前进行代码扫描
//将变量和函数的声明在当前作用域进行提升
if(true){
    var a=1;
}
console.log(a);//1
if(false){
    var b =2;
}
console.log(b);//undefined

function fn1(){
    //函数内部的预解析在函数作用域范围内
    console.log(c);
    var c = 21;
}
fn1();

function fn2(){
    fn3();
    function fn3(){
        console.log("hhh");
    }
}
fn2();
fn3();

foo1();//Uncaught TypeError: foo1 is not a function
var foo1 = function(){
    console.log("aaa");
}