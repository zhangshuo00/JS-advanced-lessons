console.log("小明回家");
var xx = ["书桌","书包","铅笔盒"];
console.log("在家做作业中");
function goToStore(){
    var yy = ["文具店老板","出售的文具"];
    console.log("在文具店 买文具中");
    console.log("在文具店 买文具中   发现没带钱");
    goToBank();
    console.log("在文具店 买好文具  返回家");
}
function goToBank(){
    var zz = ["银行职员","柜员机"];
    console.log("在银行 取钱  返回文具店");
}
console.log("在家 做作业中   发现笔没油了");
goToStore();
console.log("在家 继续做作业");