/**Promise */
setTimeout(function(){
    console.log("world");
},3000);
console.log("hello");

/** Promise将异步的操作写成同步执行的方式
 * 
 * resolve是异步操作成功时的调用
 * reject是异步操作失败时的调用
*/
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('world');
        resolve();
    },3000)
}).then(function(){
    /**对应resolve() */
    console.log('hello');
    console.log(val);
},function(){
    /**对应reject() */
}).catch(function(e){
    // console.log(val);
    console.log(e);
}).finally(function(){
    /**无论如何都会执行 */
    console.log("finally执行结束");
})