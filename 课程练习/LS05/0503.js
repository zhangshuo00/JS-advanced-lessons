var b = 2;
var a = 1;
function fn1(){
    var b = 3;
    var a = 5;
    console.log(b);//3
    function fn2(){
        var b = 5;
        var e = 6;
    }
    fn2();
}
fn1();
console.log(b);//2


//作用域的静态性，只要完成函数的定义
//变量的作用域是确定的
var username = "zhangsan";
function foo(){
    console.log(username);//zhangsan
}
function bar(){
    var username = "jace";
    foo();
}
bar();
//
var useID = 2;
document.onclick = function(){
    console.log(useID);//2
};
(function(){
    if(true){
        var useID  = 20;
    }
})()
//
for(var i = 0;i<3;i++){
    setTimeout(function(){
        console.log(new Date(),i);//i 全部为3
    }, i*1000);
}

//ES6 定义块级作用域的方式
if(true){
    let aaa = 100;
}
console.log(aaa);//0503.js:49 Uncaught ReferenceError: aaa is not defined