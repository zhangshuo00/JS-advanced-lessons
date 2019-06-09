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
var i = 1;
switch(i){
    case 1:
        console.log('1');
    case 2:
        console.log('2');
        break;
    case 3:
        console.log('3');
    default:
}