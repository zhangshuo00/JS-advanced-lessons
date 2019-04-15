//原型继承
var obj = {x:1};
/**对象的原型链尽头，Object.prototype.__proto__(null) */
console.log(obj.__proto__ == Object.prototype);//true
console.log(obj.__proto__.__proto__);//null

var obj1 = {x:1};
var obj2 = Object.create(obj1);
console.log(obj2.__proto__);
console.log(obj2.__proto__.__proto__);
console.log(obj2.__proto__.__proto__.__proto__);

//自有属性和继承属性
var proObj = {z:3};
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x);
console.log(obj.y);
console.log(obj.z);
'z'in obj;
obj.hasOwnProperty('z');

var obj1 = {z:1};
var obj2 = Object.create(obj1);
console.log(obj2.__proto__ == obj1);
obj2.z = 3;
console.log(obj2.z);
//delete操作仅可以删除对象自身上面的属性
delete obj2.z;
console.log(obj2.z);
obj2.hasOwnProperty('z');