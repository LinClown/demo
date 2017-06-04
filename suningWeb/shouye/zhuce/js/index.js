/**
 * Created by Administrator on 2017/4/13.
 */
$(function(){
    $("#sendSmsCode").click(function(){
        $(".msg-sent").show();
        setTimeout(function(){
            $(".msg-sent").hide();
        },5000);
      $(".voice-verify").show();


    });
    $(".input-wrapper>#setPsw").keyup(function(){
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