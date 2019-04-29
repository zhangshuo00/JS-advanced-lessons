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