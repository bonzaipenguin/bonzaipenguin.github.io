$('document').ready(function(){
  $('.add).on('click',function(){
    if ($('.opened').hasClass('ninth')) {
      $('.opened').next('.multi-form').removeClass('hidden').addClass('opened');
      btn.addClass('hidden');
    } else if($('.opened').hasClass('first')){
      $('.first').css({'padding-bottom':'56px'});
      $('.opened').next('.multi-form').removeClass('hidden').addClass('opened');
    }else {
      $('.multi-form .opened').removeClass('opened');
      $('.opened').next('.multi-form').removeClass('hidden').addClass('opened');
    }
  });
});
