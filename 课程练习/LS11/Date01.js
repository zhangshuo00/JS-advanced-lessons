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

