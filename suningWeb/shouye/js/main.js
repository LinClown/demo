/**
 * Created by dxt on 2017/3/31.
 */
//中间主体部分开始=====================
window.onload = function () {

    //获取li标签
    var listObjli = my$("middleul").children;
    //循环遍历li设置进入 移除事件
    for (var i = 0; i < listObjli.length; i++) {
        listObjli[i].onmouseover = function () {
            animate(this.children[1], {"height": 15, "top": 29});
        };
        listObjli[i].onmouseout = function () {
            animate(this.children[1], {"height": 0, "top": 37});
        };
    }


//左侧列表

    //获取li标签
    var listObj = my$("banner-left-item").children;
    //获取显示详细菜单的div
    var divItem = my$("dvItem").children;
    //获取li中的a标签
    var aObj = listObj.children;

    //让鼠标离开列表时隐藏
    //鼠标进入到ul显示菜单的div
    my$("banner-left-item").onmouseover = function () {
        my$("dvItem").className = "bannercurrent";
    };
    //鼠标离开菜单div隐藏
    my$("banner-left-item").onmouseout = function () {
        my$("dvItem").className = "left-banner-item"; //隐藏
    };
    for (var i = 0; i < listObj.length; i++) {
        listObj[i].setAttribute("index", i);  //设置自定义事件为索引
        //创建鼠标移入事件
        listObj[i].onmouseover = function () {
            //隐藏菜单div详情页
            for (var j = 0; j < listObj.length; j++) {
                divItem[j].style.display = "none";
            }
            divItem[this.getAttribute("index")].style.display = "block";
        };
    }

//轮播图
    //获取背景图片
    var middleBg = my$("middleBg");
    //获取相框的宽度
    var slider = my$("slider");
    //获取要移动的ul标签
    var ulObjs = slider.children[0];
    //获取图片的li标签
    var lists = ulObjs.children;
    //获取左右div焦点的div
    var pagesDiv = slider.children[1];
    //获取左按钮
    var pageLeft = pagesDiv.children[0];
    //获取右按钮
    var pageRight = pagesDiv.children[1];
    //获取相框的宽度
    var imgWidth = slider.offsetWidth;
    //获取要移动的小圆点
    var listDian = slider.children[2].children[0].children;
    //设置索引
    var pic = 0;
    //遍历所有小圆点注册鼠标进入事件
    for (var i = 0; i < listDian.length; i++) {
        listDian[i].setAttribute("index", i);
        listDian[i].onmouseover = function () {
            for (var j = 0; j < listDian.length; j++) {
                //移除类样式
                listDian[j].removeAttribute("class");
            }
            //获取类样式
            this.className = "color-bgc";
            //获取li自定义属性的索引
            var index = this.getAttribute("index");
            animate(ulObjs, {"left": -index * imgWidth});
        };
    }

    //设置定时自动播放
    var timeId = null;
    timeId = setInterval(rightClickHandle, 1000);

    //设置左右焦点进入事件 进入相框则显示
    slider.onmouseover = function () {
        animate(pagesDiv, {"opacity": 1});
        clearInterval(timeId);
    };
    slider.onmouseout = function () {
        animate(pagesDiv, {"opacity": 0});
        timeId = setInterval(rightClickHandle, 1000);
    };

    //设置右击事件
    pageRight.onclick = rightClickHandle;
    function rightClickHandle() {
        //当图片是最后一个时设置成第一个图片
        if (pic == lists.length - 1) {
            pic = 0;
            ulObjs.style.left = -pic * imgWidth + "px";
        }
        pic++;
        //移动图片
        animate(ulObjs, {"left": -pic * imgWidth});
        //循环遍历移除小按钮的样式
        for (var i = 0; i < listDian.length; i++) {
            listDian[i].className = "";
        }
        //如果当前是最后一个图片，让第一个小按钮有样式
        if (pic == lists.length - 1) {
            listDian[0].className = "color-bgc";
        } else {
            //设置对应的按钮的样式
            listDian[pic].className = "color-bgc";
        }
    }

    //设置左击事件
    pageLeft.onclick = leftClickHandle;
    function leftClickHandle() {
        //当图片是最后一个时设置成第一个图片
        if (pic == 0) {
            pic = lists.length - 1;
            ulObjs.style.left = -pic * imgWidth + "px";
        }
        pic--;
        //移动图片
        animate(ulObjs, {"left": -pic * imgWidth});
        //循环遍历移除小按钮的样式
        for (var i = 0; i < listDian.length; i++) {
            listDian[i].className = "";
        }
        listDian[pic].className = "color-bgc";
    }


//右侧新闻的滑动
    //获取新闻导航的li标签
    var list = my$("news-u").children;
    //获取滑动div
    var line = my$("newsLine");
    //获取新闻内容
    var content = my$("newContent");
    list[0].onmouseover = function () {
        animate(line, {"left": 30});
        content.children[0].className = "current";
        content.children[1].className = "";
        content.children[2].className = "";
    };
    list[1].onmouseover = function () {
        animate(line, {"left": 90});
        content.children[0].className = "";
        content.children[1].className = "current";
        content.children[2].className = "";
    };
    list[2].onmouseover = function () {
        animate(line, {"left": 150});
        content.children[0].className = "";
        content.children[1].className = "";
        content.children[2].className = "current";
    };
};

//导航栏固定
$(function() {
    $(window).scroll(function() {
        if($(document).scrollTop()>820&&$(document).scrollTop()<5700) {
            $(".position-nav").css({"position":"fixed","top":0,"display":"block"});
            $(".like").css("marginTop",$(".position-nav").height());
        }else {
            $(".position-nav").css("display","none");
            $(".like").css("marginTop",0);
        }
    });

    /*鼠标进入 全部商品显示*/
    $(".position-nav-fl").mouseenter(function() {
        $("#position-item").css("display","block");
    }).mouseleave(function() {
        $("#position-item").css("display","none");
    });

    //进入列表显示div
    $("#position-item>li").mouseenter(function() {
        $(this).css("backgroundColor","#FF9900");
        $("#postionvItem>div:eq("+$(this).index()+")").css("display","block");
    }).mouseleave(function() {
        $(this).css("backgroundColor","");
        $("#postionvItem>div").css("display","none");
    });

});




//搜索框部分
//搜索框获取焦点的事件
my$("input-txt-fixed").onfocus= function () {
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
my$("input-txt-fixed").onblur= function () {
    this.value="买多少返多少云钻，仅限今天";
    this.style.color="";
    storebig.style.display="none";
    if(my$("newDiv")){
        my$("ng-header-search").removeChild(my$("newDiv"));
    }
};



//中间主体部分结束=====================