/**
 * Created by Administrator on 2017/4/13.
 */
$(function (){
    var pic = 0;
    $("#tab ul li").mouseenter(function () {
        $(this).addClass("tab").siblings("li").removeClass("tab");
        //$("#fashion>ul>li").siblings("li").fadeOut(200);
        $("#fashion>ul>li:eq("+$(this).index()+")").fadeIn(300).siblings("li").fadeOut(200);
        pic = $(this).index();
    });

    //右边按钮
    $("#jiantou .jiantou_right").click(function () {
        if (pic == $("#fashion>ul>li").length - 1) {
            pic = 0;
        }
        pic++;
        $("#fashion>ul>li:eq("+pic+")").fadeIn(300).siblings("li").fadeOut(200);
        if (pic == $("#fashion>ul>li").length - 1) {
            $("#tab ul li:eq(0)").addClass("tab").siblings("li").removeClass("tab");
        }else {
            $("#tab ul li:eq("+pic+")").addClass("tab").siblings("li").removeClass("tab");
        }
    });

    //左边按钮
    $("#jiantou .jiantou_left").click(function () {
        if (pic == 0) {
            pic = $("#fashion>ul>li").length - 1;
        }
        pic--;
        $("#fashion>ul>li:eq("+pic+")").fadeIn(300).siblings("li").fadeOut(200);
        $("#tab ul li:eq("+pic+")").addClass("tab").siblings("li").removeClass("tab");
    });
});