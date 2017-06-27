/**
 * Created by ÍõÅôÔ¶ on 2017/5/29.
 */
$(function(){
    $(".header_bottom .cd").tap(
        function(){
            $(this).children("ul").toggle();
        }
    );

    $(".xy>li").tap(
        function(){
            var i=$(this).index();
            var x=i*-6.4+"rem";
            $(".dt").css("transform","translateX(" +x+ ")");
            $(this).addClass("hong").siblings().removeClass("hong");
        }
    );


    var a=0;
    $(".lb").swipeLeft(
        function(){
            if(a<3){
                a++;
                var x=a*-6.4+"rem";
                $(".dt").css("transform","translateX(" +x+ ")");
                $(".xy li").eq(a).addClass("hong").siblings().removeClass("hong");
            }
        }
    )

    $(".lb").swipeRight(
        function(){
            if(a>0){
                a=a-1;
                var x=a*-6.4+"rem";
                $(".dt").css("transform","translateX(" +x+ ")");
                $(".xy li").eq(a).addClass("hong").siblings().removeClass("hong");
            }
        }
    )

});