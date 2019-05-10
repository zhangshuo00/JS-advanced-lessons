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
 *  . : 匹配除换行符之外的任何单个字符
 *  
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


/**字符的集合
 * [adsfsdf] 从中括号集合中任取一个字符
 * [^adsfsdf] 排除中括号内的字符的任意一个字符
 * 
 * 字符边界
 * ^a  表示以特定字符开头
 * b$  表示以特定字符结尾
 * 
 * 数量词
 * a*  表示匹配前面的字符 0次或多次
 * a+  表示匹配前面的字符1次或多次
 * a?  表示匹配前面的字符0次或1次
 * a{n}  表示匹配前面的字符n次
 * a{m,n}  表示至少匹配m次，至多匹配n次
 * a{m, }  表示至少匹配m次
 * x|y  表示匹配x或者y
 */
var reg1 = /[abc]\d/gi;
var str1 = 'sdk1jl23jkabc1';
str1.replace(reg1,'x');

var reg2 = /[abc][0-9]/gi;
var str2 = 'jsdfkj12aaabc21';
str2.replace(reg2,'x');

var reg3 = /[^0-9]/gi;
var str3 = '1a2b3c';
str3.replace(reg3,"x");

/**用小括号包裹的规则内容，称之为分组 */
var reg4 = /(ss\d)a/gi;
var str4 = 'ss1abcd';
/**reg.exec(str)
 * 如果可以匹配的，返回数组
 * 如果不能匹配，返回null
 *      返回的数组结构
 *      [整个正则表达式匹配到的内容，分组匹配到的内容]
 */
reg4.exec(str4);

var reg4 = /(ss\d)a(\dxx)/gi;


/**str.replace()
 *      在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串
 */
var reg1 = /(ab){3}/gi;
var str1 = 'abababjdksl';
str1.replace(reg1,'x');