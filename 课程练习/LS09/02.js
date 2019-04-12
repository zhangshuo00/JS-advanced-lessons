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

var obj = {x:1};
Object.defineProperties(obj,'y',{
    writable:true,
    enumerable:true,
    configurable:true,
    value:2
});

// 获得属性特性描述符
var obj = {x:5};
Object.defineProperty(obj,'y',{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.getOwnPropertyDescriptor(obj,'x');

// 给多个属性设置特性的方法
var obj = {_z:1};
Object.defineProperties(obj,{
    x:{value:2,enumerable:true,writable:true},
    y:{},
    z:{
        get(){
            return this._z;
        },
        set(val){
            this._z = val;
        }
    }
})

// 属性的继承
var o1 = {x:1};
var o2 = Object.create(o1);
console.log(o2.__proto__ == o1);//true
//往o2自身上面添加属性x
o2.x = 2;
//delete只能删除自身所具有的属性
delete o2.x;
o2.__proto__.x = 3;
console.log(o1.x);
console.log(o2.x);//1