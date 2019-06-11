/**
 * ==如果类型不同，先转换再比较，注意引用类型到基本类型的转换方向
 * === 若类型不同则false，若类型相同则判断和==相同
 */
console.log(3 === 3);//true
console.log(NaN === NaN);//false
console.log({} === {});//false

/**
 * + 可以将字符串变量连接起来
 * 对字符串和数字进行加法运算
 */
var a = "5" + 5;
console.log(a,typeof a);//55 string

