/**只需要查看数据是否具有Symbol.iterator属性
 * 就可知道该数据结构是否可被遍历器遍历
 */
let obj = {};
console.log(obj[Symbol.iterator]);

let arr1 = [1,2,3,4];
console.log(arr1[Symbol.iterator]);

/** */
let [head,...detail] = [1,2,3,4];
console.log(detail);//[2,3,4]

/**生成器 */
function* helloGenerator(){
    yield "hello";
    yield "world";
    return "ending";
}
var hg = helloGenerator();
console.log(hg.next());//{value: "hello", done: false}
console.log(hg.next());//{value: "world", done: false}
console.log(hg.next());//{value: "ending", done: true}


/** */
let myiterator = {};
myiterator[Symbol.iterator] = function* (){
    yield {name:'zhangsan'};
    yield {age:20};
    return;
}
console.log([...myiterator]);
/**[{…}, {…}]
 * 0: {name: "zhangsan"}
 * 1: {age: 20}
 * length: 2
 * __proto__: Array(0)
 */
for(let i of myiterator){
    console.log(i);
}
//{name: "zhangsan"}
//{age: 20}