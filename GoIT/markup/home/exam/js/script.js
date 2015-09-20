$(document).ready(function() {
    
    $('.tabs_item').click(function(){
        var index = $(this).attr('data-tabindex');
        $('.tabs_item').removeClass('active');
        $(this).addClass('active');
    
        $('.tabs_content').hide();
        $('.tabs_content_' + index).show();
    });
});