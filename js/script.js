$(".gnb").hover(
    function(){
        $('.sub').stop().slideDown();
    },
    function(){
        $('.sub').stop().slideUp();
    }
);

//$('.tab li:eq(0)').click(
//    function(){
//        console.log($(this).index());
//        $('.notice').show();
//        $('.gallery').hide();
//    }
//);
//
//$('.tab li:eq(1)').click(
//    function(){
//        console.log($(this).index());
//        $('.notice').hide();
//        $('.gallery').show();
//    }
//);

$('.tab>li').click(
    function(){
        var num = $(this).index();
        $('.tabmenu>li').hide();
        $('.tabmenu>li').eq(num).show();
        
        $('.tab>li>a').removeClass('on');
        $(this).children('a').addClass('on');
    }
);

$('.notice>li').eq(0).click(
    function(){
        $('#popup').fadeIn();
    }
);
$('.popup_body button').click(
    function(){
        $('#popup').fadeOut();
    }
);













