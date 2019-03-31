var a =1,b=2;
function fn(){
    var a = 10,c=20;
    console.log(a,b,c);
    function bar(){
        var a = 30,d=50;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
console.log(a,b,c,d);