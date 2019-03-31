// console.log(a);//undefined
// var a = 1;
// console.log(a);
// //以上代码相当于变量命名提升
// var a;
// console.log(a);
// a = 2;
// console.log(a);

//
// console.log(a,b);//undefined undefined
// var b = 23;
// console.log(a,b);//undefined 23
// var a = 3;
// console.log(a,b);//3 23

//
console.log(obj1,obj2);
var obj1 = {x:23};
console.log(obj1,obj2);
var obj2 = obj1;
console.log(obj1,obj2);
obj2.x = 34;
console.log(obj1,obj2);// 34 34

