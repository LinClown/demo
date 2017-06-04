/**
 * Created by Administrator on 2017/4/1.
 */



    //头部广告关闭部分
my$("top-nav-i").onmouseover= function () {
    this.style.backgroundColor="rgba(0, 0, 0, .3)"

};
my$("top-nav-i").onmouseout= function () {
    this.style.backgroundColor="rgba(0, 0, 0, .1)";

};
my$("top-nav-i").onclick= function () {
    animate(my$("top-nav"), {"height": 0, "opacity": 0}, function () {
        my$("top-nav").style.display = "none";//再次的隐藏
    });
};
//头部导航部分
//获取头部部分标签
//鼠标移入头部导航下拉框列表显示
//先获取到所有的div
var navDivs=my$("ng-nav-one").getElementsByClassName("mouseover1");
//获取到搜索框下的div
var storebig=document.getElementsByClassName("storebig")[0];
//获取到storebig下所有的a标签
storebigAA=storebig.getElementsByTagName("a");
for(var i=0;i<navDivs.length;i++){
    navDivs[i].onmouseover=mouseoverHandle;
    navDivs[i].onmouseout=mouseoutHandle;
}
//获取第一块浮动快上面的关闭图标
var piaoi=my$("piaoi");
function mouseoverHandle(){
  //  this.getElementsByClassName("iconfont icontranf")[0].style.transition="transform .5s";
  //this.getElementsByClassName("iconfont icontranf")[0].style.transform="rotateX(180deg)";
    this.getElementsByClassName("iconfont icontranf")[0].innerHTML="&#xe65d;";
   this.getElementsByClassName("down")[0].style.display="block";
    this.style.backgroundColor="#fff";
    //this.style.borderTop="1px solid #ddd";
    this.style.borderLeft="1px solid #ddd";
    this.style.borderRight="1px solid #ddd";
    this.getElementsByClassName("down")[0].style.borderTop="0";

}
function mouseoutHandle(){
    //this.getElementsByClassName("iconfont icontranf")[0].style.transition="transform .5s";
    //this.getElementsByClassName("iconfont icontranf")[0].style.transform="rotateX(0deg)";
    this.getElementsByClassName("iconfont icontranf")[0].innerHTML="&#xe65e;";
    this.getElementsByClassName("down")[0].style.display="none";
    this.style.backgroundColor="";
    //this.style.borderTop="";
    this.style.borderLeft="";
    this.style.borderRight="";
    this.getElementsByClassName("down")[0].style.borderTop="";
}
piaoi.onclick= function () {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    my$("piaod").getElementsByClassName("iconfont icontranf")[0].innerHTML="&#xe65e;";
   my$("piaod").style.backgroundColor="#F5F5F5";
    my$("piaod").style.borderTop="";
    my$("piaod").style.borderLeft="";
    my$("piaod").style.borderRight="";
};


//搜索框部分
//搜索框获取焦点的事件
my$("input-txt").onfocus= function () {
    this.value="";
    storebig.style.display="block";
//为storebigAA的每一个设置鼠标进入移出事件
    for(var i=0;i<storebigAA.length;i++){
        storebigAA[i].onmouseover= function () {
            this.style.backgroundColor="#FF6600";
            this.style.color="#fff";
        };
        storebigAA[i].onmouseout= function () {
            this.style.backgroundColor="";
            this.style.color="";
        };
    }
};

//为storebig里 的关闭按钮设置点击事件
//先获取
var closeEm=my$("hotseach-icon");
closeEm.onclick= function () {
    storebig.parentNode.removeChild(storebig);
};
my$("input-txt").onblur= function () {
    this.value="买多少返多少云钻，仅限今天";
    this.style.color="";
    storebig.style.display="none";
    if(my$("newDiv")){
        my$("ng-header-search").removeChild(my$("newDiv"));
    }
};
var index=0;
//为搜索框设置键盘抬起事件
my$("input-txt").onkeyup= function (e) {
    var data = [
        {"衬衫": ["衬衫男", "衬衫女", "衬衫长款", "衬衫短款","找'衬衫'相关店铺"]},
        {"裙子": ["裙子长款", "裙子短款", "裙子夏天", "裙子冬天","找'裙子'相关店铺"]},
        {"裤子": ["裤子男", "裤子女", "裤子夏季", "裤子冬季","找'裤子'相关店铺"]},
        {"衣服": ["衣服男", "衣服女", "衣服 运动", "衣服 休闲","找'衣服'相关店铺"]},
        {"运动鞋": ["运动鞋男", "运动鞋女", "运动鞋夏季", "运动鞋冬季","找'运动鞋'相关店铺"]}
    ];
    if(this.value.length!=0){
        storebig.style.display="none";
    }else{
        storebig.style.display="block";
    }
    if(my$("newDiv")){
        my$("ng-header-search").removeChild(my$("newDiv"));
    }
    //创建临时数组放与输入内容相匹配的字符串
    var tempArr=[];
    //获取输入的内容
    var text=this.value;
    //循环遍历数据库
    for(var i=0;i<data.length;i++){
        var dt=data[i];
        if(dt[text]){
            tempArr=dt[text];
        }
    }
    if(this.value.length==0||tempArr.length==0){
        if(my$("newDiv")||my$("storebig")){
            storebig.parentNode.removeChild(storebig);
            my$("ng-header-search").removeChild(my$("newDiv"));
        }
        return;
    }

    //创建div,存放临时数组
    var divObj=document.createElement("div");
    my$("ng-header-search").appendChild(divObj);
    divObj.className="newDiv";
    divObj.id="newDiv";
    divObj.style.zIndex=9000;
    divObj.style.position="absolute";


    //在div里创建ｐ标签
    for(var i=0;i<tempArr.length;i++){
        var pObj=document.createElement("p");
        divObj.appendChild(pObj);
        var aObj=document.createElement("a");
        pObj.appendChild(aObj);
        pObj.style.pointer="cursor";
        aObj.innerHTML=tempArr[i];
        aObj.style.color="#000";
        aObj.style.fontsize="14px";
        aObj.href = "javascript:void(0)";
        aObj.style.lineHeight="20px";
        aObj.style.Height="20px";
        aObj.style.paddingLeft="15px";
        //给搜索框下面的大盒子里的a标签设置鼠标进入鼠标移出事件
        pObj.onmouseover= function () {
            this.style.backgroundColor="#F5F5F5";
        };
        pObj.onmouseout= function () {
            this.style.backgroundColor="";
        };
        pObj.onclick= function () {
            my$("input-txt").value=this.children[0].innerHTML;
            my$("input-txt").style.color="#000";
        };
    }
    pObj.style.paddingLeft="17px";
    pObj.style.position="relative";
    //创建一个装图标的盒子
    var store=document.createElement("img");
    pObj.appendChild(store);
    store.className="store";
    store.style.display="block";

    //键盘上下键
    if(e.keyCode==40){
        if(index==divObj.children.length){
            index=0;
        }
        divObj.children[index].onmouseover();
        index++;
    }
    if(e.keyCode==38){
        if(index==0){
            index=divObj.children.length;
        }
        divObj.children[index-1].onmouseover();
        index--;
    }
};


//为搜索框下的热词添加点击事件
//先获取所有的a 标签
var allA=my$("ng-search-hot").children;
for(var i=0;i<allA.length;i++){
    allA[i].onclick= function () {
        my$("input-txt").value=this.innerHTML;
        my$("input-txt").style.color="#000";
    };
}


