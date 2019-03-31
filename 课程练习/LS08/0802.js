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
    var y = "局部";
    console.log(y);
};
f2();
console.log(y);//函数内的变量前有var ,则此行报错：y not defined