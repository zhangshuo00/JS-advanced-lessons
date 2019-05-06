/**正则表达式的结构:
 *   /正则表达式文本/标识符
 */
/**[xyz] 从中括号中的字符中选任意一个
 * i 标识符；是否忽略大小写
 * g 标识符：是否全局检索 */
var reg1 = /[bcf]at/gi;//字面量定义
var reg2 = new RegExp(/[bcf]at/,'gi');
var reg3 = new RegExp('[bcf]at','gi');

var str1 = "bat cat fat Fat djsojoj";
str1.match(reg1);


/**替换字符串中符合标准的字符 */
var reg1 = /ab/gi;
var str1 = 'abcdefg';
str1.replace(reg1,'x');

/**字符分类：
 *  \d: 匹配阿拉伯数字
 *  \D: 不是阿拉伯数字 [ ^0-9]
 * 
 *  \w: 匹配所有的字母、数字、下划线 [a-z A-z 0-9 _]
 *  \W: 不是字母数字下划线
 * 
 *  \s: 匹配空格，可以使space，tab
 */
var reg1 = /a\d/gi;
var str1 = 'adfsjo1joi11xxxxoij2311';
str1.replace(reg1,'x');

var reg2 = /a\D/gi;
var str2 = 'a1aba2ac';
str2.replace(reg2,'x');

var reg3 = /a\w/gi;
var str3 = 'jsdk123l';
str3.replace(reg3,'x');

var reg4 = /\sa\d/gi;
var str4 = "a1 s2joi3";
str4.replace(reg4,'x');


/**字符的集合 */
var reg1 = /[abc]\d/gi;
var str1 = 'sdk1jl23jkabc1';
str1.replace(reg1,'x');

var reg2 = /[abc][0-9]/gi;
var str2 = 'jsdfkj12aaabc21';
str2.replace(reg2,'x');

var reg3 = /[^0-9]/gi;
var str3 = '1a2b3c';
str3.replace(reg3,"x");


/**匹配开头字符是数字  第二个字符是 a-f  第三个字符是空格 */