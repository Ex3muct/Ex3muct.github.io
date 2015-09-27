$(document).ready(function() {
    
    $('.tabs_item').click(function(){
        var index = $(this).attr('data-tabindex');
        $('.tabs_item').removeClass('active');
        $(this).addClass('active');
    
        $('.tabs_content').hide();
        $('.tabs_content_' + index).show();
    });
    
    $('.slider_block .right_arrow').click(function() {
        
        var currentIndex = parseInt($('.slider_block').find('.slide-item.active').attr('data-slide-index'));
            nextSlideIndex = currentIndex + 1;  
        
        if($('.slider_block .slide-item').length == nextSlideIndex) {
            $('.slider_block .right_arrow').hide();
            $('#slide-item-' + currentIndex).removeClass('active').fadeOut(function() {
                
                $('#slide-item-' + nextSlideIndex).addClass('active').fadeIn();
            });            
            return false;
        } else {
            $('.slider_block .left_arrow').show();
            $('#slide-item-' + currentIndex).removeClass('active').fadeOut(function() {
                
                $('#slide-item-' + nextSlideIndex).addClass('active').fadeIn();
            });
        }
    });
    
    $('.slider_block .left_arrow').click(function() {
        
        var currentIndex = parseInt($('.slider_block').find('.slide-item.active').attr('data-slide-index'));
            prevSlideIndex = currentIndex - 1;  
        
        if(prevSlideIndex == 1) {
            $('.slider_block .left_arrow').hide();
            $('#slide-item-' + currentIndex).removeClass('active').fadeOut(function() {
                
                $('#slide-item-' + prevSlideIndex).addClass('active').fadeIn();
            });            
            return false;
        } else {
            $('.slider_block .right_arrow').show();
            $('#slide-item-' + currentIndex).removeClass('active').fadeOut(function() {
                
                $('#slide-item-' + prevSlideIndex).addClass('active').fadeIn();
            });
        }
    });    
});