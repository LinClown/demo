/**
 * Created by Administrator on 2017/4/6.
 */
window.onload = function () {
    //先获取最大的div
    var fashion = my$("fashion");
    //获取左右焦点的div
    var pagesDiv = fashion.children[0];
    //获取左按钮
    var leftBtn = pagesDiv.children[0];
    //获取右边按钮
    var rightBtn = pagesDiv.children[1];
    //获取ul
    var ulObj = fashion.children[1];
    //获取li
    var liObjs = ulObj.children;
    //获取所有选项卡
    var tab = my$("tab").children[0].children;

    var pic = 0;
    //遍历所有的选项卡，注册鼠标进入事件
    for (var i = 0; i < tab.length; i++) {
        tab[i].setAttribute("index",i);
        tab[i].onmouseover = function () {
              for (var j = 0; j < tab.length; j++) {
                  tab[j].removeAttribute("class");
              }
            this.className = "tab";
            pic = this.getAttribute("index");
            animate(ulObj,{"left":-pic * fashion.offsetWidth});
        };
    }

    //右按钮
    rightBtn.onclick = function () {

        if (pic == tab.length){
            pic = 0;
            ulObj.style.left = -pic * fashion.offsetWidth + "px";
        }
        pic++;
        console.log(pic);
        animate(ulObj,{"left":-pic * fashion.offsetWidth});
        //设置选项卡的样式
        for (var i = 0; i < tab.length; i++) {
            tab[i].className = "";
        }
        if (pic == tab.length) {
            tab[0].className = "tab";
            ulObj.style.left = 0;
        }else {
            tab[pic].className = "tab";
        }
    };

    //左边按钮
    leftBtn.onclick = function () {
        if (pic == 0){
            pic = tab.length;
            ulObj.style.left = -pic * fashion.offsetWidth + "px";
        }
        pic--;
        console.log(pic);
        animate(ulObj,{"left":-pic * fashion.offsetWidth});
        //设置选项卡的样式
        for (var i = 0; i < tab.length; i++) {
            tab[i].className = "";
        }

            tab[pic].className = "tab";
    };
};