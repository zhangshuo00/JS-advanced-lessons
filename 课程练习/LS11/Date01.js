/**new Date(年份，月份，日，时，分，秒) */
var date1 = new Date('2019','01','01');
console.log(date1);

var date2 = new Date('2019-01-01');
console.log(date2);

var millionSeconds = Date.now();
var date3 = new Date(millionSeconds);
console.log(date3);

var millionSeconds = Date.parse('2019-01-01');
console.log(millionSeconds);

// 
var nowDate = new Date();
console.log(nowDate);//把当前日期和时间保存为初始值
console.log(nowDate.getDate());//获取当前月份的日期
console.log(nowDate.getDay());//返回Date对象的星期，返回值是 0（周日） 到 6（周六） 之间的一个整数
console.log(nowDate.getMonth());//返回月份
console.log(nowDate.getFullYear());//以四位数字返回年份

var d1 = new Date('July 01,1999 00:01:09');
console.log(d1.getDate());//获取创建Date对象的日
