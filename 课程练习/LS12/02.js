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


/** String.prototype
 * 
 *      var result = str.replace(正则表达式，替换的内容);
 *      返回值result是被替换后的字符串
 * 
 *      str.match(正则表达式)
 *      返回值，如果匹配成功返回数组，匹配失败，返回null
 * 
 *      var result = str.search(正则表达式);
 *      返回值是匹配位置的起始索引值
 * 
 * RegExp.prototype
 * 
 *      reg.test(str);返回值为true和false
 *      验证字符串是否符合正则表达式规则
 * 
 *      reg.exec(str)匹配返回数组，不匹配返回null
 *      [整个正则匹配到的内容，分组匹配到的内容，index开始匹配到的索引]
 * 
 *           
*/
var reg = /\d(aa)/gi;
var str = 'laa hello';
console.log(str.match(reg));

/**(.*)  .任意的一个字符 *表示前面的字符出现0次或多次
 * 表示文件名字符出现0次或多次
 * (.+)
 * 
 * \. 对.做转义处理，匹配.
 * (rar|zip|7zip|tgz)任意取其中一个
 * $以前面的分组结尾
 */
var reg1 = /(.*)\.(rar|zip|7zip|tgz)$/;

/** ^#  表示必须以#开头
 *  [a-fA-F0-9] 从[]集合中取任意一个字符
 *  {6} 表示前面的字符出现6次
 *  $以前面集合的任一字符结尾
*/
var reg2 = /^#[a-fA-F0-9]{6}$/;