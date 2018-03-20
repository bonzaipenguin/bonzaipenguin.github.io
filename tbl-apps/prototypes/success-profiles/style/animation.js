$('document').ready(function(){
  $('.bio').hover(
    function(){
      $(this).children('.overlay').stop( true ).animate({'top':'0'},300);
      $(this).children('.headshot').addClass('blur');
  },function(){
      $(this).children('.overlay').stop( true ).animate({'top':'250'},300);
      $(this).children('.headshot').removeClass('blur');
  });
});
