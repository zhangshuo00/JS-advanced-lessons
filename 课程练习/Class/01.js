function Parent(x,y){
    this.x = x;
    this.y = y;
}
function Child(x,y,z){
    Parent.call(this,x,y);
    this.z = z;
}
let c1 = new Child(1,2,3);
console.log(c1);


/**
 * super在子类的构造函数中，可以指向父类的构造函数
 * super在子类的实例方法中，可以指向父类的原型对象
 */
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
class ColorPoint extends Point{
    constructor(x,y,color){
        super(x,y);//super();指向父类的构造函数
        this.color = color;
    }
    show(){
        console.log(this.x,this.y,this.color);
    }
}
var cp = new ColorPoint(1,2,3);
cp.show();