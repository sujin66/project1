$(function(){

/******************bx slider******************/

    $(document).ready(function(){
        $('.slider').bxSlider();
        });
        
/*******************navi > submenu******************/

    $('.mainmenu li').each(function(){

        $(this).mouseover(function () {

            var sub = $(this).find('ul')
            $(sub).stop().slideDown();
        }).mouseout(function(){
            $('.submenu').stop().slideUp();
    
        });

    });// $('.mainmenu a').each00  


/*******************surfing point info******************/    

    var now_index;
    var src_off = $('.map img').attr('src');
    var src_on = src_off.replace('01','02');



    $('.map img').click(function(){
        now_index = $(this).data('index');

        $('.map img').attr('src',src_off);
        $(this).attr('src',src_on)

        $('.loc_img').hide().eq(now_index).show().hover(function(){
            $('.round_img div').eq(now_index).fadeIn();
        }, function(){
            $('.round_img div').fadeOut();
        });

    });

    var now_index;
    $('.sub_menu a').click(function(){
        now_index = $(this).data('index');
        $('.pnt_img').hide().eq(now_index).show();
    });


/********************championship schedule****************/

    var now_index;
    // var src_off = $('.map img').attr('src');
    // var src_on = src_off.replace('01','02');



    $('sche_text').click(function(){
        now_index = $(this).data('index');

        $('.sche_text').hide().eq(now_index).show().hover(function(){
            $('.day').eq(now_index).fadeIn();
        }, function(){
            $('.day').fadeOut();
        });

    });


/********************main scroll****************/

    $(window).scroll(function(){
        if($(this).scrollTop()>1800){
            $('.fire img:nth-child(1)').css({'animation':'bomb 3s ease-in-out'})
            $('.fire img:nth-child(2)').css({'animation':'bomb 2s ease-in-out'})
            $('.fire img:nth-child(3)').css({'animation':'bomb 1.5s ease-in-out'})
            $('.fire img:nth-child(4)').css({'animation':'bomb 4s ease-in-out'})
        }
    });


    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.sec1').fadeIn(1500);
        }
        if($(this).scrollTop() > 800){
            $('.sec2').fadeIn(1500);
        }
        if($(this).scrollTop() > 1500){
            $('.sec3').fadeIn(1000);
        }
        if($(this).scrollTop() > 2900){
            $('.sec4').fadeIn(1500);
        }
        if($(this).scrollTop() > 3000){
            $('.sec5').fadeIn(1500);
        }
        if($(this).scrollTop() > 3000){
            $('footer').fadeIn(1500);
        }
    });


}); //ready end

