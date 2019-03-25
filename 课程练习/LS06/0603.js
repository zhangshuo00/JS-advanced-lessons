var spanList = document.getElementsByTagName('span');
var show = document.getElementsByClassName('show')[0];
for(var i = 0;i<spanList;i++){
    spanList[i].onclick = function(){
        show.innerHTML = "导航" + i + "内容";
    }
}