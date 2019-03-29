/*
//内容的变化
(function (w,d) {
    var spanList = d.getElementsByTagName("span");
    var show = d.getElementsByClassName("show")[0];//类数组结构
    for(var i = 0;i<spanList.length;i++){
        (function(j) {
            spanList[j].onclick = function() {
                show.innerHTML = "导航" + j + "内容";
            }
        })(i)
    }
})(window,document)
*/
//解决方案 IIFE 重新打开index09.html页面测试
var tabs = document.getElementsByClassName('tabs')[0].children;
var contents = document.getElementsByClassName('show')[0];

for(var i=0;i<tabs.length;i++) {
    (function (i) { 	//IIFE start
        tabs[i].onclick=function(){
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].className = '';
            }
            this.className = "active";
            contents.innerHTML = "导航" + i + "内容";
        };
    }(i));			//IIFE end
}