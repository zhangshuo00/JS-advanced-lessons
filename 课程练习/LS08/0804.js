//闭包
var tmp = 2;
function foo(){
    return function(){
        console.log(++tmp);
    }
}
var fee = foo();
fee();

//作为对象的方法返回
function counter(){
    var n = 0;
    return {
        count:function(){return ++n;},
        reset:function(){n=0;return n;}
    }
}
var c = counter(),d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());

//
function closure(objID,content,delay){
    setTimeout(function() {
        console.log(objID,content);
    }, delay);
}
closure('container','hello world',1000);