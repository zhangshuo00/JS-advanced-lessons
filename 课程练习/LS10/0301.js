var arr1 = [,2,3,,5];
console.log(arr1.length);//5

Array.prototype.min = '扩展属性';
// 遍历数组的过程中，需要注意
for(var i in arr1){
    console.log(i,arr1[i]);
}