/**
 * Created by Administrator on 2017/3/31.
 */
//顶部样式
var listChildren = my$("list").getElementsByClassName("children");
//遍历所有的listChildren,添加鼠标进入事件
for (var i = 0; i < listChildren.length; i++) {
    listChildren[i].onmouseover = function () {
        for (var j = 0; j < listChildren.length; j++) {
            listChildren[j].style.backgroundColor = "";
        }
        this.getElementsByClassName("iconfont")[0].innerHTML = "&#xe65d;";//上面的小三角
        this.style.backgroundColor = "#fff";//背景色
        this.children[1].style.display = "block";//下面div里的内容
        this.children[1].style.zIndex = "100";
    };
    listChildren[i].onmouseout = function () {
        this.style.backgroundColor = "";
        this.children[1].style.display = "none";
        this.getElementsByClassName("iconfont")[0].innerHTML = "&#xe65e;";
    };
}
my$("close-nav").onclick = function () {
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
};
//搜索框部分
//搜索框获得焦点
my$("search-txt").onfocus = function () {
    //console.log(getStyle(this,"color"));
    if (getStyle(this, "color") == "rgb(187, 187, 187)") {
        this.value = "";
        this.style.color = "#000";
        my$("search-down").style.display = "block";
    }
    if (this.value.length != 0) {
        my$("search-dv").style.display = "block";

    }
};
//获取右上角的关闭按钮
my$("close-s").onclick = function () {
    my$("search").removeChild(my$("search-down"));
};
my$("close-dv").onclick = function () {
    my$("search").removeChild(my$("search-dv"));
};
//搜索框失去焦点
my$("search-txt").onblur = function () {
    if (this.value.length == 0) {
        this.value = "女士卫衣";
        this.style.color = "";
    }
    my$("search-down").style.display = "none";
    my$("search-dv").style.display = "none";


};

//鼠标抬起时
my$("search-txt").onkeyup = function () {
    if (this.value.length == 0) {
        my$("search-down").style.display = "block";
        my$("search-dv").style.display = "none";
    } else {
        my$("search-dv").style.display = "block";
        my$("search-dv").children[0].innerHTML = "找“" + this.value + "”相关的店铺";
        my$("search-down").style.display = "none";
    }
};
my$("search-dv").onmouseover = function () {
    this.style.backgroundColor = "#eee";
    this.children[0].style.backgroundColor = "#eee";
};
my$("search-dv").onmouseout = function () {
    this.style.backgroundColor = "#fff";
    this.children[0].style.backgroundColor = "#fff";
};
//主体部分
//中间全部商品分类的下拉列表
//获取装有全部商品分类的大盒子
var shangPin = my$("banner-top-fl");
//获取类别里面的每个li标签，注册鼠标进入和离开事件
var listBox = shangPin.children[1].children[0].children;
//获取每个类别里的img
var listImg = shangPin.children[1].children[1].children;
shangPin.onmouseover = function () {
    //显示下面的大盒子
    this.children[1].style.display = "block";
};
shangPin.onmouseout = function () {
    this.children[1].style.display = "none";
};
//遍历所有的li注册鼠标进入和离开事件
for (var i = 0; i < listBox.length; i++) {
    listBox[i].setAttribute("index", i);
    listBox[i].onmouseover = mouseoverHandle;
    listBox[i].onmouseout = mouseoutHandle;

}
function mouseoverHandle() {
    var len = list.length;
    for (var j = 0; j < len; j++) {
        listBox[j].style.backgroundColor = "";
        listImg[j].className = "";
    }
    this.style.backgroundColor = "#F9494B";
    listImg[this.getAttribute("index")].className = "current";
}
function mouseoutHandle() {
    this.style.backgroundColor = "";
    listImg[this.getAttribute("index")].className = "";
}
for (var i = 0; i < listImg.length; i++) {
    listImg[i].onmouseover = function () {
        for (var j = 0; j < listImg.length; j++) {
            listImg[j].className = "";
        }
        this.className = "current";
    };
}

//轮播图
//获取轮播图最外面的大框
var lunBoObj = my$("banner-in");
//获取装图片的ul
var ulImg = lunBoObj.children[0];
//图片的li
var liImg = ulImg.children;
//获取装图标的大的div
var bannerContent = my$("banner-content");
//获取装按钮的div
var anNiu = bannerContent.children[0];
//左侧按钮
var left = anNiu.children[0];
//右侧按钮
var right = anNiu.children[1];
//图片的宽度
var imgWidth = ulImg.getElementsByTagName("img")[0].offsetWidth;
//获取下方的小圆点
var dianObj = bannerContent.children[1].children[0].children;
var pic = 0;
for (var i = 0; i < dianObj.length; i++) {
    dianObj[i].setAttribute("index", i);
    dianObj[i].onmouseover = function () {
        for (var j = 0; j < dianObj.length; j++) {
            dianObj[j].className = "";
        }
        pic = this.getAttribute("index");
        this.className = "current";
        animate(ulImg, {"left": -pic * imgWidth});
    }
}

//设置轮播图自动切换
var timeId = setInterval(clickRight, 2000);
//设置左右按钮的显示和隐藏
bannerContent.onmouseover = function () {
    anNiu.style.display = "block";
    clearInterval(timeId);
};
bannerContent.onmouseout = function () {
    anNiu.style.display = "none";
    timeId = setInterval(clickRight, 2000);
};
//为左侧按钮注册点击事件

right.onclick = clickRight;
function clickRight() {
//小按钮--5个  图片6张
    if (pic == liImg.length - 1) {
        pic = 0;
        ulImg.style.left = 0;
    }
    pic++;
    animate(ulImg, {"left": -pic * imgWidth});
    //设置小按钮样式
    for (var j = 0; j < dianObj.length; j++) {
        dianObj[j].className = "";//先清空所有类样式
    }
    if (pic == liImg.length - 1) {
        dianObj[0].className = "current";
    } else {
        dianObj[pic].className = "current";
    }
}
//左侧按钮
left.onclick = function () {
    if (pic == 0) {
        pic = liImg.length - 1;
        ulImg.style.left = -pic * imgWidth + "px";
    }
    pic--;
    animate(ulImg, {"left": -pic * imgWidth});
    //设置小按钮样式
    for (var j = 0; j < dianObj.length; j++) {
        dianObj[j].className = "";//先清空所有类样式
    }
    dianObj[pic].className = "current";
};


//轮播图最左侧的列表部分
//获取最外面的diV
var category = my$("category");
//获取所有的列表
var liObj = category.children;
//遍历注册鼠标进入和鼠标离开事件
for (var i = 0; i < liObj.length; i++) {
    liObj[i].setAttribute("index", i);
    liObj[i].onmouseover = function () {
        var aObj = this.children[0].getElementsByTagName("a");
        for (var i = 0; i < aObj.length; i++) {
            aObj[i].style.color = "#000";
        }
        var index = this.getAttribute("index");
        this.children[0].children[0].style.backgroundColor = "#EEEEEE";
        this.children[0].children[1].style.backgroundColor = "#Fff";
        this.children[0].children[0].children[0].className = "tu" + index;
        this.children[1].style.display = "block";
    };
    liObj[i].onmouseout = function () {
        var aObj = this.children[0].getElementsByTagName("a");
        for (var i = 0; i < aObj.length; i++) {
            aObj[i].style.color = "#fff";
        }
        var index = this.getAttribute("index");
        this.children[0].children[0].style.backgroundColor = "";
        this.children[0].children[1].style.backgroundColor = "";
        this.children[0].children[0].children[0].className = "icon" + index;
        this.children[1].style.display = "none";
    };
}
//获取关闭按钮
var close = category.getElementsByClassName("close");
//循环遍历，添加点击事件
var length = close.length;
for (var i = 0; i < length; i++) {
    close[i].setAttribute("index", i);
    close[i].onclick = function () {
        var index = this.getAttribute("index");
        var dl = liObj[index].children[0];
        var aObj = dl.getElementsByTagName("a");
        for (var i = 0; i < aObj.length; i++) {
            aObj[i].style.color = "#fff";
        }
        dl.children[0].style.backgroundColor = "";
        dl.children[1].style.backgroundColor = "";
        dl.children[0].children[0].className = "";
        liObj[index].children[1].style.display = "none";
    };
}
//推荐品牌高亮显示
//右上角
my$("nt-r").onmouseover = function () {
    this.style.border = "1px solid  #FF6600";
};
my$("nt-r").onmouseout = function () {
    this.style.border = "";
};
//推荐品牌主体
my$("pinPai").children[1].children[0].onmouseover = function () {
    this.style.border = "1px solid black";
};
my$("pinPai").children[1].children[0].onmouseout = function () {
    this.style.border = "";
};

var list = my$("nb-r").children[0].children;
for (var i = 0; i < list.length; i++) {
    list[i].onmouseover = function () {
        this.style.border = "1px solid black";
    };
    list[i].onmouseout = function () {
        this.style.border = "";
    };
}

//返回顶部固定栏
window.onscroll = function (e) {
    var height = my$("top-box").offsetHeight + my$("logo").offsetHeight + my$("banner").offsetHeight;
    var height2 = height + my$("pinPai").offsetHeight + my$("chaoliu").offsetHeight + my$("s-nav").offsetHeight ;
    var height3=height2+2*(my$("girl").offsetHeight);
    if (document.body.scrollTop >= height) {
        my$("fixed").style.display = "block";
    } else {
        my$("fixed").style.display = "none";
    }
    my$("boy").style.paddingTop="";
    if (document.body.scrollTop >= height2 && document.body.scrollTop <= height3) {
        my$("s-nav").style.position = "fixed";
        my$("s-nav").style.top = "0";
        my$("s-nav").style.zIndex = "100";
        my$("s-nav").style.marginTop = "0";
    } else {
        my$("s-nav").style.position = "static";
        my$("s-nav").style.zIndex = "";
        my$("s-nav").style.marginTop = "";
        my$("boy").style.marginTop = "";
    }
};
my$("fixed").children[0].onmouseover = function () {
    this.innerText = "返回顶部";
    this.className = "up";
    this.style.backgroundColor="white";
};
my$("fixed").children[0].onmouseout = function () {
    this.innerText = "";
    this.className = "top";
};
my$("fixed").children[1].onmouseover = function () {
    this.innerText = "调查问卷";
    this.className = "down";
    this.style.backgroundColor="white";
};
my$("fixed").children[1].onmouseout = function () {
    this.innerText = "";
    this.className = "btm";
};