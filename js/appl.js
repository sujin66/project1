$(function(){

    var now_sub_index;

    $('.sche_info .day').hide();

    $('.sche_text h4').hover(function(){
            now_sub_index = $(this).data('index');
            $('.day').hide().eq(now_sub_index).show();
    });

});