//Number.isFinite()用来检测传入的参数是否为有穷数
Number.isFinite('0');//false
Number.isFinite(0);//true

//Number.prototype.toFixed();用定点表示法格式化一个数值
//返回数字的字符串
let a = 3.1415926;
a.toFixed(3);//'3.142'
console.log(a.toFixed(1));//'3.1'
//小数部分四舍五入，不足的用0填充

//Number.prototype.toString();返回字符串
console.log((10).toString());

//Number.prototype.toPrecision();以指定精度返回该数值对象的字符串
//???和toFixed()的区别,同样是四舍五入输出
//toFixed()中的参数是固定小数点之后的位数
//toPrecision()中的参数是整个数值保留的位数
let a1 = 3.1415926;
console.log(a1.toPrecision(1));//'3'
let a2 = 30.1231;
console.log(a2.toPrecision(1));//Identifier 'a1' has already been declared

//Number.prototype.toExponential();以指数表示法返回该数值字符串
//参数为保留的小数点位数，四舍五入
let a3 = 2.12566;
console.log(a3.toExponential());

//String.prototype.charAt();从一个字符串中返回指定的字符
//参数为字符串的索引值
let str1 = 'zhangsan';
console.log(str1.charAt(0));//'z'

//String.prototype.slice(begin,end);截取字符串，并返回新的字符串
let str2 = 'zhangsan';
console.log(str2.slice(2,-2));//'angs'

//String.prototype.substr(start,length);返回一个字符串中从指定位置开始到指定字符数的字符串
let str3 = 'zhangsan';
console.log(str2.substr(0,3));//'zha'

//String.prototype.substring(indexstart,indexend);返回一个字符串在开始索引到结束索引之间的一个子集
//或从开始索引到字符串末尾的一个子集
let str4 = 'zhangsan';
console.log(str4.substring(2,4));

//String.prototype.split();用指定的分隔符分割成字符串数组
//如果空字符串被用作分隔符，则会在每个字符之间分割
var str6 = 'zhangsan';
console.log(str6.split('a'));//["zh", "ngs", "n"]