/**
 * Created by Administrator on 2017/4/14.
 */
$(function () {
    $("#mobileNum").focus(function () {
            if ($(this).val().length != 0 &&  $(this).val() != "请输入手机号" ) {

            }else if ($(this).val() == "请输入手机号") {
                $(this).val("");
                $(this).css("color","black");
            }
    }).blur(function () {
        if ($(this).val().length == 11) {
            var txt =$(this).val();
            reg = /[0-9]{11}/;
             if (reg.test(txt)) {
                 $(".phoneNum").text("");
             }

        }else {
            $(".phoneNum").text("格式不正确！请您输入正确的手机号");
        } if ($(this).val().length == 0 ) {
            $(this).val("请输入手机号");
            $(this).css("color","#cacaca");
            $(".phoneNum").text("");
        }
    });

    $("#yanzhengma").focus(function () {
        if ($(this).val().length != 0 &&  $(this).val() != "请输入手机验证码") {

        }else if ($(this).val() == "请输入手机验证码"){
            $(this).val("");
            $(this).css("color","black");
        }
    }).blur(function () {
        if ($(this).val().length == 6) {
            var txt =$(this).val();
            reg = /[0-9]{6}/;
            if (reg.test(txt)) {
                $(".yanzhengma-msg").text("");
            }
        }else {
            $(".yanzhengma-msg").text("格式不正确！请您输入正确的验证码");
        }
        if ($(this).val().length == 0) {
            $(this).val("请输入手机验证码");
            $(this).css("color","#cacaca");
            $(".yanzhengma-msg").text("");
        }
    });

    $(".send-msg").click (function () {
        if ($("#mobileNum").val().length == 0 || $("#mobileNum").val() == "请输入手机号") {
            $(".phoneNum").text("请输入注册手机号！");
        }else if ($("#mobileNum").val().length != 0 && $("#mobileNum").val() != "请输入手机号") {
            $(".yanzhengma-msg").text("短信已发送！注意查收");
            setTimeout(function () {
                $(".yanzhengma-msg").text("");
            },3000);
        }
    });
    $("#pass").focus(function () {
        if ($(this).val().length != 0 &&  $(this).val() != "请输入密码") {

        }else if ($(this).val() == "请输入密码") {
            $(this).val("");
            $(this).css("color","black");
        }

    }).blur(function () {
        if($(this).val().length==0){
            $(this).val("请输入密码");
            $(this).css("color","#cacaca");
        }
    });
    $("#pass").keyup(function(){
        $(".security-level").show();
        $(".suggestion").show();
        if($(this).val().length==0){
            $(".suggestion").hide();
            $(".security-level").hide();

            $(".security-level .level1").css("backgroundColor","");
            $(".security-level .level2").css("backgroundColor","");
            $(".security-level .level3").css("backgroundColor","");
        }
        var txt=$(this).val();
        if($(this).val().length>=6){

            if(/[0-9]/.test(txt)||/[a-zA-Z]/.test(txt)||/\W/.test(txt)){
                $(".security-level .level1").css("backgroundColor","pink");
                $(".security-level .level2").css("backgroundColor","");
                $(".security-level .level3").css("backgroundColor","");
            }
            if(/[a-zA-Z]/.test(txt)&&/[0-9]/.test(txt)||/[a-zA-Z]/.test(txt)&&/\W/.test(txt)||/[0-9]/.test(txt)&&/\W/.test(txt)){

                $(".security-level .level2").css("backgroundColor","orange");
                $(".security-level .level3").css("backgroundColor","");
            }
            if(/[0-9]/.test(txt)&&/[a-zA-Z]/.test(txt)&&/\W/.test(txt)){
                $(".security-level .level3").css("backgroundColor","red");
            }
        }
        //$("span").className="security-"+lvl;

    });


});