$('document').ready(function(){
// ONE
  $('.one').children('.next').on('click', function() {
    $('.second').removeClass('hidden');
    $('.second').animate({
      'opacity': '1'
    }, 200);
    $('.second').addClass('opened');
    $('.first').addClass('hidden').css({'opacity':'0'});
    $('.one').children('.next').removeClass('col-sm-12').removeClass('btn-secondary').addClass('btn-low').html('<span>Next Candidate</span> <i class="material-icons">navigate_next</i>');
  });

// TWO
  $('.two').children('.next').on('click', function() {
    $('.third').removeClass('hidden');
    $('.third').animate({
      'opacity': '1'
    }, 200);
    $('.second').addClass('hidden').css({'opacity':'0'});
    $('.two').children('.next').html('<span>Next Candidate</span> <i class="material-icons">navigate_next</i>');
  });
  $('.two').children('.prev').on('click', function() {
    $('.first').removeClass('hidden');
    $('.first').animate({
      'opacity': '1'
    }, 200);
    $('.second').addClass('hidden').css({'opacity':'0'});
  });

// THREE
  $('.three').children('.next').on('click', function() {
    $('.fourth').removeClass('hidden');
    $('.fourth').animate({
      'opacity': '1'
    }, 200);
    $('.third').addClass('hidden').css({'opacity':'0'});
    $('.three').children('.next').html('<span>Next Candidate</span> <i class="material-icons">navigate_next</i>');
  });
  $('.three').children('.prev').on('click', function() {
    $('.second').removeClass('hidden');
    $('.second').animate({
      'opacity': '1'
    }, 200);
    $('.third').addClass('hidden').css({'opacity':'0'});
  });

// FOUR
  $('.four').children('.next').on('click', function() {
    $('.fifth').removeClass('hidden');
    $('.fifth').animate({
      'opacity': '1'
    }, 200);
    $('.fourth').addClass('hidden').css({'opacity':'0'});
    $('.four').children('.next').html('<span>Next Candidate</span> <i class="material-icons">navigate_next</i>');
  });
  $('.four').children('.prev').on('click', function() {
    $('.third').removeClass('hidden');
    $('.third').animate({
      'opacity': '1'
    }, 200);
    $('.fourth').addClass('hidden').css({'opacity':'0'});
  });

// FIVE
  $('.five').children('.next').on('click', function() {
    $('.sixth').removeClass('hidden');
    $('.sixth').animate({
      'opacity': '1'
    }, 200);
    $('.fifth').addClass('hidden').css({'opacity':'0'});
  });
  $('.five').children('.prev').on('click', function() {
    $('.fourth').removeClass('hidden');
    $('.fourth').animate({
      'opacity': '1'
    }, 200);
    $('.fifth').addClass('hidden').css({'opacity':'0'});
  });

// SIX
  $('.six').children('.next').on('click', function() {
    $('.seventh').removeClass('hidden');
    $('.seventh').animate({
      'opacity': '1'
    }, 200);
    $('.sixth').addClass('hidden').css({'opacity':'0'});
  });
  $('.six').children('.prev').on('click', function() {
    $('.fifth').removeClass('hidden');
    $('.fifth').animate({
      'opacity': '1'
    }, 200);
    $('.sixth').addClass('hidden').css({'opacity':'0'});
  });

// SEVENTH
  $('.seven').children('.next').on('click', function() {
    $('.eighth').removeClass('hidden');
    $('.eighth').animate({
      'opacity': '1'
    }, 200);
    $('.seventh').addClass('hidden').css({'opacity':'0'});
  });
  $('.seven').children('.prev').on('click', function() {
    $('.sixth').removeClass('hidden');
    $('.sixth').animate({
      'opacity': '1'
    }, 200);
    $('.seventh').addClass('hidden').css({'opacity':'0'});
  });

// EIGHTH
  $('.eight').children('.next').on('click', function() {
    $('.ninth').removeClass('hidden');
    $('.ninth').animate({
      'opacity': '1'
    }, 200);
    $('.eighth').addClass('hidden').css({'opacity':'0'});
  });
  $('.eight').children('.prev').on('click', function() {
    $('.seventh').removeClass('hidden');
    $('.seventh').animate({
      'opacity': '1'
    }, 200);
    $('.eighth').addClass('hidden').css({'opacity':'0'});
  });

// NINTH
  $('.nine').children('.next').on('click', function() {
    $('.tenth').removeClass('hidden');
    $('.tenth').animate({
      'opacity': '1'
    }, 200);
    $('.ninth').addClass('hidden').css({'opacity':'0'});
  });
  $('.nine').children('.prev').on('click', function() {
    $('.eighth').removeClass('hidden');
    $('.eighth').animate({
      'opacity': '1'
    }, 200);
    $('.ninth').addClass('hidden').css({'opacity':'0'});
  });

// TENTH
  $('.ten').children('.prev').on('click', function() {
    $('.ninth').removeClass('hidden');
    $('.ninth').animate({
      'opacity': '1'
    }, 200);
    $('.tenth').addClass('hidden').css({'opacity':'0'});
  });
});
