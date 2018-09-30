$(window).on('load',function(){
    $('body').removeClass('load-height');
    $('#loader-wrapper').remove();
});


$("html").easeScroll();

$(".back-top").on('click', function(event) {
    $('body, html').animate({
      scrollTop : 0
    });
});

$('.top-menu-lnk').click(function(event){
    if($(this).next('.overlay-menu').hasClass('overlay-menu-hide')){
        $(this).next('.overlay-menu').removeClass('overlay-menu-hide');
    }
   else{
        $(this).next('.overlay-menu').addClass('overlay-menu-hide');
   }
   event.preventDefault();
});
$('.top-menu-close').click(function(event){
    $(this).parent('.overlay-menu').addClass('overlay-menu-hide');
    event.preventDefault();
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.back-top').fadeIn();
    } else {
      $('.back-top').fadeOut();
    }
    
});


$(document).ready(function() {
    $("a").click(function() {
    var regExp = new RegExp(/\/\/.+?(\/.+?)\#/);
    if ( window.location.hash && window.location.pathname != regExp.exec(this.href)[1]) {
        window.location.href = this.href;
    }
    });
});


jQuery(function($) {
  
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
      
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      
      // Unbind scroll handler if we have no animatables
      if ($animatables.length == 0) {
        $(window).off('scroll', doAnimations);
      }
      
      // Check all animatables and animate them if necessary
          $animatables.each(function(i) {
         var $animatable = $(this);
              if (($animatable.offset().top + $animatable.height() - 350) < offset) {
          $animatable.removeClass('animatable').addClass('animated');
              }
      });
  
      };
    
    // Hook doAnimations on scroll, and trigger a scroll
      $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  
  });