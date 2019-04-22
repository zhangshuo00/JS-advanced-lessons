//非严格模式下的this
var x =1;
var y = 2;
alert(window.x);
// this 取决于所在函数的调用主体
function thisTest(){
    console.log(this);
}
thisTest();

// 严格模式下的this
function thisTest(){
    "use strict";
    console.log(this);
    return this == undefined ? true:false;
}
thisTest();

var point = {
    x:1,
    y:2,
    moveTo:function(x,y){
        this.x = x;
        this.y = y;
    }
}
point.moveTo(10,10);

// 函数或者方法的内部this指向，取决于该函数的调用主体
