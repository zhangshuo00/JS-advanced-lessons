var superObj = {
    x:1,
    y:2
};
var subObj_first = Object.create(superObj);
var subObj_second = Object.create(superObj);
subObj_first.__proto__.x = 5;
console.log(subObj_second.x);