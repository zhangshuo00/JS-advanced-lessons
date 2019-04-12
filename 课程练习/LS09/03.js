//原型继承
var obj = {x:1};
/**对象的原型链尽头，Object.prototype.__proto__(null) */
console.log(obj.__proto__ == Object.prototype);//true
console.log(obj.__proto__.__proto__);//null