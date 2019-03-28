var spanList = document.getElementsByTagName('span');
var show = document.getElementsByClassName('show')[0];
for(var i = 0;i<spanList;i++){
    spanList[i].onclick = function(){
        show.innerHTML = "导航" + i + "内容";
    }
}

//函数的声明
//声明式会导致函数提升，被解释器优先编译，可以在任何区域声明，不影响调用
function max(a,b){
    return a>b?a:b;
}
max(2,3);
//函数表达式中的function不会提升，js解释器逐行解释，如果调用在函数表达式
//之前，就会调用失败
var max = function(a,b){
    return a>b?a:b;
}
max(2,3);

//
function test1(){
    console.log("this is",this);
}
test1();//window
//嵌套
function test2(){
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//window

//对象方法的调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//23 输出对象

var x = 45;
var test = function(){
    console.log("输出：",this.x);
}
var obj = {
    x:23
};
obj.test = test;
obj.test();//23
test();//45

var x = 45;
var obj = {
    x:23,
    test:function(){
        function foo(){console.log(this.x);}
        foo();
    }
};
obj.test();//45

//给obj动态添加方法
var sayHi = function(){
    console.log("Hi,i'm",this.name);
}
obj.sayHi = sayHi();
obj.sayHi();
//
var fun1 = function(){
    return function fun2(){
        return this.x;
    }
}
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());
console.log(obj.fun3()());
console.log(obj.fun4());