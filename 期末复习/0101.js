//typeof 用于值类型的检测
console.log(typeof undefined);
console.log(typeof {name:'lisi',age:20});//object
console.log(typeof function fun(){});//function
//为function类型
console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);
//以下为object类型
console.log(typeof Math);
console.log(typeof JSON);
//instanceof 用于返回 a是否为B类型
var a = {name:'lisi',age:10};
console.log(a instanceof Object);//true

var Person = function(){};
var person = Person();
console.log(person instanceof Person);

/**基本类型与引用类型的区别
    * 函数内定义的基本数据类型的临时变量分配在栈区
    * 引用数据类型的变量的引用地址存放在栈区或堆区，被指向的对象存储在堆区
    * 基本类型(Number/String/Boolean/Null/Undefined)
    * 引用类型(Object(Array/Function/Date/Error))
  *基本数据类型是值赋值 
 */
//值赋值
var str_a = 'a';
var str_b = str_a;
str_b = 'b';
console.log(str_a,str_b);//a b
//赋引用地址
var obj_a = {v:'a'};
var obj_b = obj_a;
obj_b.v = 'a';
console.log(obj_a,obj_b);//对象obj_a 的属性值也改变
//通过obj_b 修改堆内存的变量