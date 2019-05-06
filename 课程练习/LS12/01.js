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
