/**
 * Created by Administrator on 2017/4/6.
 */
var list = document.getElementsByClassName("s-nav")[0].children[0].children;
for (var i = 0; i < list.length; i++) {
    //������
    list[i].onmouseover = function(){
        this.style.backgroundColor = "#F7817E";
    };
    //����뿪
    list[i].onmouseout = function(){
        this.style.backgroundColor = "";
    };
}
list[1].onclick = function () {
    my$("boy").style.paddingTop = "40px";
};
//Ůװ����
var girl = my$("girl").getElementsByClassName("ulst")[0].getElementsByClassName("top");
for (var i = 0; i < girl.length; i++) {
    girl[i].onmouseover =mouseoverHandle;
    girl[i].onmouseout =mouseoutHandle;
}
function mouseoverHandle() {
    this.children[2].style.display = "block";
}
function mouseoutHandle() {
    this.children[2].style.display = "none";
}
var girlBtm = my$("girl").getElementsByClassName("ulst")[0].getElementsByClassName("btm");
for (var i = 0; i < girlBtm.length; i++) {
    girlBtm[i].onmouseenter = mouseenterHandle;
    girlBtm[i].onmouseleave= mouseleaveHandle;
}
function mouseenterHandle() {
    this.style.border = "1px solid black";
    animate(this.children[0].children[0], {"margin-left": 15});

}
function mouseleaveHandle() {
    this.style.border = "";
    animate(this.children[0].children[0], {"margin-left": 0});
}
//��װ����
var boy = my$("boy").getElementsByClassName("ulst")[0].getElementsByClassName("top");
for (var i = 0; i < boy.length; i++) {
    boy[i].onmouseover = mouseoverHandle;
    boy[i].onmouseout = mouseoutHandle;
}
var boyBtm = my$("boy").getElementsByClassName("ulst")[0].getElementsByClassName("btm");
for (var i = 0; i < boyBtm.length; i++) {
    boyBtm[i].onmouseenter = mouseenterHandle;
    boyBtm[i].onmouseleave = mouseleaveHandle;
}