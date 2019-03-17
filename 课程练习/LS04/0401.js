//Part01 深拷贝与浅拷贝
//假设B复制了A，当修改A时，看B是否会发生
//变化，如果B也跟着变了，说明是浅拷贝
//如果B没变，就是深拷贝

var a = [1,2,3];
var b = a;
console.log(a,b);

//b.shift();//移除数组的第一个元素
//b.pop();//删除数组最后一个元素
//console.log(a,b);//1,2 1,2

b = [4,5,6];
console.log(a,b);//1,2,3  4,5,6



//Part02

function foo(x){
    x.push(4);
    x = [5,6,7];
    x.push(8);
    console.log(x);
}
var a = [1,2,3];
foo(a);
// console.log(a);


//Part03
var a = [' abc ' , false , 3.1415];
function change(a){
    for(var i = 0;i<a.length;i++){
        if(typeof a[i] === 'string'){
            a[i] = a[i].trim();
        }else if(typeof a[i] === 'boolean'){
            a[i] = Number(a[i]);
        }else{
            a[i] = a[i].toFixed(2);
        }
    }
    console.log(a);
}
//change(a);

//Part04
var str = "赵钱孙李周吴郑王冯陈楮卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜";
//var b = prompt("请输入一个姓氏");
//var b = "刘";
function func(str,b){
   
    var loca = str.indexOf(b);
    if(loca === -1){//姓氏不存在
        console.log("该姓氏不存在");
    }else{
        console.log(loca);
        if(loca != 0)
            console.log(str.slice(0,loca));
        else
            console.log("该姓氏之前姓氏不存在");
    }
}
//func(str,b);

//Part05
console.log(a1);//undefined
if(true)
    var a1 = 2;
console.log(a1);//2
console.log(b1);//undefined
if(false){
    var b1 = 3;
}
console.log(b1);//undefined

//Part06
for(var i = 0;i<3;i++){
    console.log("i:",i);//1 2 3
}
console.log(i);//3