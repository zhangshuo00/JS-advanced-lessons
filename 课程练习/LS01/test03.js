var x;
x= 234;
if(234 == x){
    console.log("相等");
}
if(x == 234){
    console.log("xiangdeng");
}

console.log(a);//undefind
if(true){
    var a = 2;
}
console.log(a);//2

//ECMAscript是一个语言标准，JavaScript是完全基于ECMAscript实现的
//脚本语言 ECMAscript5是ES5的全称
//ES5标准下 没有块级作用域

if(false){
    var username = "zhangsan";
}
console.log(username);//undefined

for(var i=0;i<3;i++){

}
console.log(i);

//全局的，对所以页面js代码均应用严格模式
'use strict'

function fn1(){
    //函数范围内起作用
    'use strict'
}
//非严格模式下，不使用var 来显式声明变量，则该变量自动转化为全局变量
function fn2(){
    username = 'lisi';
}
fn2();
console.log(username);
//this指向全局变量
//window
function fn3(){
    console.log(this);
}
fn3();
function fn4(){
    'use strict'//严格模式
    console.log(this);
}
fn4();//undefined


function judge(){
    var result = (this === undefined?true:false);
    return result;
}
if(judge()){//false 非严格模式
    console.log("严格模式");
}else{
    console.log("非严格模式");
}