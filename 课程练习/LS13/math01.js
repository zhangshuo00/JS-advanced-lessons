/**
 *      Math.random()
 */
for(var i = 0;i<5;i++){
    console.log(Math.random());
}

/**得到两个数之间的随机值 */
function getMiddle(min,max){
    return Math.random()*(max - min)+min;
}
getMiddle(1,10);