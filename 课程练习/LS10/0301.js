var arr1 = [,2,3,,5];
console.log(arr1.length);//5

Array.prototype.min = '扩展属性';
// 遍历数组的过程中，需要注意
for(var i in arr1){
    console.log(i,arr1[i]);
}

// 多维数组
var table = new Array(5);
for(var i = 0;i<table.length;i++){
    table[i] = new Array(5);
}
for(var row = 0;row<table.length;row++){
    for(var col = 0;col<table[row].length;col++){
        table[row][col] = row*col;
    }
}
var product = table[2][4];

//数组的方法
// 内置对象方法：1.确定使用的方法是构造函数的静态方法还是原型方法 2.查看MDN该方法相关定义、作用
// 3.查看该方法的相关参数
    // （1）如果包含了回调函数，还需要回调函数的相关参数
    // （2）哪些参数是必须的，哪些参数是可选的
// 4.该方法执行的到的返回结果
// Array.from() 从一个类似数组或可迭代对象中创建一个新的数组实例
// Array.prototype.reverse() 将数组中元素的位置颠倒，并返回该数组，该方法会改变原来的数组
var arr1 = [1,2,3,4];
var reverse = arr1.reverse();
console.log(reverse);

// arr.forEach(callback,thisArg);
// callback是针对数组的每个数组元素所应用的回调函数
// value 表示数组元素的元素值
// index 表示数组元素的索引值
// thisArg 回调函数内部的this指向
var arr1 = [1,2,3];
var obj1 = {x:'d'};
arr1.forEach(function(value,index,arr){
    console.log(value,index,arr);
    this[value] = value;
},obj1);
console.log(obj1);

/**var result = arr.every(callback)
 * 测试数组的数组元素执行回调函数的结果，如果有返回值为false的，
 * 则result，如果均为true则result为true
 */
var arr1 = [10,20,30,40];
var result = arr1.every(function(value){
    return value > 20;
})
console.log(result);

/**只要某些数组元素满足条件，返回值即为true
 * 如果全都不满足，返回值为false
 */
var result = arr1.some(function(value){
    return value > 30;
})
console.log(result);

/**arr.map()创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果 */
var result = arr1.map(function(value){
    return value*2;
})
console.log(result);

/**arr.filter() 创建一个新数组，其包含 通过所提供的函数的测试 的元素 */
var result = arr1.filter(function(value){
    return value >= 20;
});
console.log(result);