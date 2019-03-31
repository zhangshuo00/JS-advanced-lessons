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