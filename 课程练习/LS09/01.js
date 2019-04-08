// var objProto = {z:3};
// var obj = Object.create(objProto);
// obj.x = 1;
// obj.y = 2;
// console.log(obj.x,obj.y,obj.z);
// console.log(obj.toString);

//
Object.defineProperty(obj,'y',{
    value:'2',
    enumberable:false
});
console.log(obj);
for(var i in obj){
    console.log(i,obj[i]);
}
var person = {
    'username' : 'zhangsan'
};
Object.defineProperty(person,'username',{
    //是否可枚举 for...in 能否遍历到
    enumberable: true,
    //是否可配置,能否delete 删除该属性
    configurable:true,
    //属性是否可写
    writable:true,
    //属性值
    value:'lisi'
})
person.username = 'wangwu';
delete person.username;
console.log(person.username);

Object.defineProperty(obj,'username',{
    configurable:true,
    enumerable:true,
    get(){
        return this._username;
    },
    set(val){
        this._username = val;
    }
})
obj.username = 'zhangsan';
console.log(obj.username);
