


//获取ul  li
var ulObj = my$("lunbotu").children[0];
var list = ulObj.children;
//console.log(list.length);
//获取宽度
var imgWidth =300;
//获取左右按钮的div
var pages = my$("lunbotu").children[1];
//获取左按钮
var left = my$("left");
//获取右按钮
var right = my$("right");

//鼠标进入大层显示

my$("lunbotu").onmouseover = function () {
    animate(pages, {"opacity": 1});

};
//鼠标离开大层隐藏
my$("lunbotu").onmouseout = function () {
    animate(pages, {"opacity": 0});

};

//点击左边按钮
var pic = 0;


left.onclick = function () {
    console.log('left0',pic);
    //console.log(pic);
    if (pic>0) {
        pic--;
        //console.log('left',pic);
        // console.log(list.length);
        animate(ulObj, {"left":- pic * imgWidth});
    }/*else{
     pic=0

     }*/

};
right.onclick=function() {
    // console.log('right',pic);
    if( pic<=4 ){
        pic++;
    }

    //console.log(pic)
    if (pic >=5) {
        pic=4;

    }else{
        animate(ulObj, {"left": -pic * imgWidth});
    }
};


//获取所有的Li标签
var listObjs=my$("uu").children;

function ChangeStyle(dvId,idId,txt){
    this.dvObj=my$(dvId);
    this.idObj=my$(idId);
    this.txt=txt;
}
ChangeStyle.prototype.setStyle=function(){
    var that=this;
    that.idObj.onmouseover=function(){
        for(var i=0;i<listObjs.length;i++){
            listObjs[i].children[0].style.display="none";
        }
        animate(that.dvObj,{"width":110});
        that.dvObj.innerHTML=that.txt;
        that.dvObj.style.fontWeight=600;
        that.dvObj.style.textAlign="center";
        that.dvObj.style.backgroundColor="#FFAA00";
        that.dvObj.style.display="block";
        that.dvObj.style.cursor="pointer";

    };
    that.dvObj.onmouseout=function(){
        animate(that.dvObj,{"width":0});
        that.dvObj.style.backgroundColor="#555555";
        that.dvObj.innerHTML="";
        /*   that.dvObj.style.display="none";*/

    }

};
var cs1=new ChangeStyle("dv1","id1","消息");
cs1.setStyle();
var cs2=new ChangeStyle("dv2","id2","理财");
cs2.setStyle();
var cs3=new ChangeStyle("dv3","id3","足迹");
cs3.setStyle();
var cs4=new ChangeStyle("dv4","id4","签到");
cs4.setStyle();
var cs5=new ChangeStyle("dv5","id5","在线咨询");
cs5.setStyle();
var cs6=new ChangeStyle("dv6","id6","意见反馈");
cs6.setStyle();
var cs8=new ChangeStyle("dv8","id8","返回顶部");
cs8.setStyle();


my$("id7").onmouseover=function(){
    //my$("dv7").style.display="block";
    animate(my$("dv7"),{"width":242});
};
my$("dv7").onmouseout=function(){
    animate(my$("dv7"),{"width":0});
};


//小轮播图
//获取轮播图所在div

var boxObj=my$("fashion-fs");
//获取里面的层
var innerFs=boxObj.children[0];
//获取相框宽度
var imgObj=innerFs.offsetWidth;
//获取ul标签
var ulObjs=innerFs.children[0];
//获取span
var spans=innerFs.children[1].children;
var pic=0;
//遍历小按钮
for(var i=0;i<spans.length;i++){
    spans[i].setAttribute("index",i);
    spans[i].onmouseover=mouseoverHandle;
}
function mouseoverHandle(){
    for(var i=0;i<spans.length;i++){
        spans[i].removeAttribute("class");
    }
    this.className="current";
    pic=parseInt(this.getAttribute("index"));
    animate(ulObjs,{"left":-pic*imgObj});
}

//获取点击按钮层
var arrowFs=boxObj.children[1];
//获取左边点击按钮
var arrLf=my$("arrLf");
//获取右边按钮
var arrRh=my$("arrRh");
//注册鼠标移入事件
boxObj.onmouseover=function (){
    arrowFs.style.opacity="1";
};
boxObj.onmouseout=function (){
    arrowFs.style.opacity="0";
};
arrLf.onclick=function (){
    if(pic==0){
        pic=spans.length;
        ulObjs.style.left=(-pic*imgObj)+"px";
    }
    pic--;
    animate(ulObjs,{"left":-pic*imgObj});
    for(var i=0;i<spans.length;i++){
        spans[i].className="";
    }
    spans[pic].className="current";
};
arrRh.onclick=function (){
    if(pic==spans.length){
        pic=0;
        ulObjs.style.left=(-pic*imgObj)+"px";
    }
    pic++;
    animate(ulObjs,{"left":-pic*imgObj});
    for(var i=0;i<spans.length;i++){
        spans[i].className="";
    }
    if(pic==spans.length){
        spans[0].className="current";
    }else{
        spans[pic].className="current";
    }
};




//动画左右移
var showUlObj=my$("show-lists-lf");
var showLiObj=showUlObj.children;

for(var i=0;i<showLiObj.length;i++){
    showLiObj[i].onmouseover=mouseoverHandle1;
    showLiObj[i].onmouseout=mouseoutHandle1;
}

function mouseoverHandle1(){
    animate(this.children[0],{"margin-left":20});
    animate(this.children[1],{"margin-right":25});
}
function mouseoutHandle1(){
    animate(this.children[0],{"margin-left":10});
    animate(this.children[1],{"margin-right":15});
}



var showUlMdObj=my$("show-lists-md");
var showLiObj=showUlMdObj.children;

for(var i=0;i<showLiObj.length;i++){
    showLiObj[i].onmouseover=mouseoverHandle1;
    showLiObj[i].onmouseout=mouseoutHandle1;
}

$(function (){
    $(".choose-fashion>ul>li").mouseenter(function (){
        var index=$(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".fashion-rh>ul:eq("+index+")").addClass("selected").siblings("ul").removeClass("selected");
    });


    $(window).scroll(function (){
        //为页面添加页面滚动监听事件
        var scrollObj=$(window).scrollTop();//滚动条距离顶端值
        for(var i=1;i<8;i++){
            if($(document).scrollTop()>820&&$(document).scrollTop()<5700) {
                if($("#a"+i).offset().top<=scrollObj) {
                    $(".fixed-lf").css("display", "block");
                    $("#u1 a").removeClass("cc");
                    $("#aa" + i).addClass("cc");
                }
            }else {
                $(".fixed-lf").css("display","none");
            }
        }
    });
    $("#u1 a").mouseenter(function (){
        $(this).addClass("cc");
    }).mouseleave(function (){
        $("#u1 a").removeClass("cc");
    });


    //直播

    var liObj=$("#u6 li");
    liObj.mouseenter(function () {
            $(this).find("i").addClass("iCurrent").siblings("i").removeClass("iCurrent");
            $(this).find("div").css("display","block").siblings("div").css("display","none");
        }).mouseleave(function (){
        $(this).find("i").removeClass("iCurrent");
        $(this).find("div").css("display","none");
        });

});

//window.onload=function (){
//    $(window).scrollTop(0);
//};





