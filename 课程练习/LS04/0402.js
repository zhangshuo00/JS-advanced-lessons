var num = 1;
var str = " some thing ";
var t = true;
var n = null;//console.log(n);null
var u = undefined;//console.log(u);undefined

console.log(typeof n);//object  js语言的历史设计问题
//一下类型都为function
console.log(typeof Number);
console.log(typeof String);
console.log(typeof Boolean);
//......
//如果是=== 先看类型 类型不同为false
//类型相同（如果是基本类型，判断值是否相等
//如果是引用类型，判断引用是否为同一个引用

//如果是== 先看类型
//进行类型转换
//转换后 如果是基本类型，判断值是否相等，
//如果是引用类型，判断引用是否为同一个引用

//基本类型的数据放在栈内存中，引用类型的数据放在堆内存
var a1 = 2;
var a2 = "2";
console.log(a1 == a2);//true
console.log(a1 === a2);//false

var b1 = {};
var b2 = {};
console.log(b1 == b2);//false 不是同一个引用
console.log(b1 === b2);//false
console.log(b1 === b1);//true

var c1 = 23;
var c2 = new Number(23);
console.log(c1 == c2);//true
console.log(c1 === c2);//false 一个为引用类型，一个为基本类型

//
var str = "abc";
console.log(str.length);
str.length = 1;
console.log(str);//"abc"
//原始类型变量的不可变性，指的是包装对象的改变并不影响原始类型的变量
//访问基本类型的变量属性时，会创建临时包装对象，访问的是该包装对象的属性
//另外改变此临时包装对象的属性，并不会影响原变量(原始类型变量的不可变性)

//
//typeof 常用于检测基本类型的变量
//instanceif 常用于检测引用类型的变量 instance 左侧期望是一个对象，右侧期望是一个类型