var a =1,b=2;
function fn(){
    var a = 10,c=20;
    console.log(a,b,c);
    function bar(){
        var a = 30,d=50;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
console.log(a,b,c,d);

//词法作用域
/*在作用域内 查找变量 
从里到外 各层作用域组成了作用域链

词法作用域是静态作用域
*/
var name = "zhangsan";
function echo(){
    console.log(name);
}
echo();//zhangsan
//
var name = "zhangsan";
function echo(){
    console.log(name);
}
function foo(){
    var name = "lisi";
    echo();
}
foo();//zhangsan
//
var name = "zhangsan";
function echo(){
    console.log(name);
}
function foo(){
    var name = 'lisi';
    function fee(){
        var name = 'wangwu';
        echo();
    }
    fee();
}
foo();//zhangsan