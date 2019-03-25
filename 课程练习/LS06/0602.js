var div1 = document.getElementById('div1');
function show(el){
    (function(el) {document.onclick = function(){
        div1.innerHTML = "hello world";
    }})(el)
}
show();
//立即执行函数表达式
(function max(x,y){
    return x>y?x:y;
}(2,3));

var userId = 2;
document.onclick = function(){
    alert(userId);
}

(function() {
    if(true){
        var userId = 20;
    }
})();
//变量的非期望共享
function f(){
    var getNumFuncs  = [];
    for(var i=0;i<10;i++){
        (function (j){
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();

