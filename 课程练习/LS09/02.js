var userId = 12;
document.onclick = function(){
    console.log('userId',userId);
}
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 32;
    }
}());
console.log(userId);

//使用立即执行函数,避免文件之间的全局污染
(function(){
    var x=10;
    document.onclick = function(){
        alert('x='+x);
    };
})();