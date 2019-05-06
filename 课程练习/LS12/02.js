/**
 * ^m 以m开头的字符串匹配
 * n$ 以n结尾的字符串匹配
 */

var reg1 = /^a\d/gi;
var str1 = 'a1jdosffds';
str1.replace(reg1,'x');

var reg2 = /a\d$/gi;
var str2 = 'sdjfojoja2';
str2.replace(reg2,'x');

/**数量词：
 *      n?  表示n出现0次或1次
 *      n+  表示n出现1次或多次
 *      p(m,n)  表示p至少m次，至多n次
 */
var reg3 = /a?bcd/gi;
var str3 = 'adjskbcdaa';
str3.replace(reg3,'x');

var reg4 = /a+bcd/gi;
var str4 = 'abcd abcd bcdd';
str3.replace(reg4,'x');