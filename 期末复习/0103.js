//严格模式
/**不允许使用未声明的变量 */
"use strict";
x = 3.14;

//不允许删除变量或对象
"use strict"
var x = 12;
delete x;//Delete of an unqualified identifier in strict mode.

//禁止this指向全局对象
function f(){
    "use strict";
    console.log(this);
}
f();//undefined

//switch语句的穿透性
//从满足第一个case处开始执行，遇到break为止；若没有break则直到default结束
var i = 4;
switch(i){
    case 1:
        console.log('1');
    case 2:
        console.log('2');
        break;
    case 3:
        console.log('3');
    default:
        console.log('default');//未找到匹配项时输出的代码块
}

//for(variable in object)...in
//variable 在每次迭代时，将不同的属性名分给变量  object 被迭代枚举其属性的对象
//可用于遍历对象和数组
var obj = {
    a:1,
    b:2,
    c:3
};
for(var j in obj){
    console.log("obj."+j+"="+obj[j]);
}