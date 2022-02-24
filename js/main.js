$(function(){



    $(document).ready(function(){
        $('.slider').bxSlider();
        });
        
    $(".mainmenu").mouseover(function () {
        $('.submenu').stop().slideDown();
    }).mouseout(function(){
        $('.submenu').stop().slideUp();

    });

    var now_index;
    $('.map img').click(function(){
        now_index = $(this).data('index');
        $('.loc_img').hide().eq(now_index).show();
    });



    var now_index;
    $('.sub_menu a').click(function(){
        now_index = $(this).data('index');
        $('.pnt_img').hide().eq(now_index).show();
    });




}); //ready end

