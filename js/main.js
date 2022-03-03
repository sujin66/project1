$(function(){



    $(document).ready(function(){
        $('.slider').bxSlider();
        });
        


    $('.mainmenu li').each(function(){

        $(this).mouseover(function () {

            var sub = $(this).find('ul')
            $(sub).stop().slideDown();
        }).mouseout(function(){
            $('.submenu').stop().slideUp();
    
        });

    });// $('.mainmenu a').each

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



}); //ready end

