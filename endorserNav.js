$('document').ready(function(){
// ONE
  $('.one').children('.next').on('click', function() {
    $('.second').removeClass('hidden');
    $('.second').animate({
      'opacity': '1'
    }, 200);
    $('.second').addClass('opened');
    $('.first').addClass('hidden');
    $('.one').children('.next').removeClass('col-sm-12').removeClass('btn-secondary').addClass('btn-low').html('<span>Next Candidate</span> <i class="material-icons">navigate_next</i>');
  });

// TWO
  $('.two').children('.next').on('click', function() {
    $('.third').removeClass('hidden');
    $('.third').animate({
      'opacity': '1'
    }, 200);
    $('.second').addClass('hidden');
    $('.two').children('.next').html('<span>Next Candidate</span> <i class="material-icons">navigate_next</i>');
  });
  $('.two').children('.prev').on('click', function() {
    $('.first').removeClass('hidden');
    $('.first').animate({
      'opacity': '1'
    }, 200);
    $('.second').addClass('hidden');
  });

// THREE
  $('.three').children('.next').on('click', function() {
    $('.fourth').removeClass('hidden');
    $('.fourth').animate({
      'opacity': '1'
    }, 200);
    $('.third').addClass('hidden');
    $('.three').children('.next').html('<span>Next Candidate</span> <i class="material-icons">navigate_next</i>');
  });
  $('.three').children('.prev').on('click', function() {
    $('.second').removeClass('hidden');
    $('.second').animate({
      'opacity': '1'
    }, 200);
    $('.third').addClass('hidden');
  });

// FOUR
  $('.four').children('.next').on('click', function() {
    $('.fifth').removeClass('hidden');
    $('.fifth').animate({
      'opacity': '1'
    }, 200);
    $('.fourth').addClass('hidden');
    $('.four').children('.next').html('<span>Next Candidate</span> <i class="material-icons">navigate_next</i>');
  });
  $('.four').children('.prev').on('click', function() {
    $('.third').removeClass('hidden');
    $('.third').animate({
      'opacity': '1'
    }, 200);
    $('.fourth').addClass('hidden');
  });

// FIVE
  $('.five').children('.next').on('click', function() {
    $('.sixth').removeClass('hidden');
    $('.sixth').animate({
      'opacity': '1'
    }, 200);
    $('.fifth').addClass('hidden');
  });
  $('.five').children('.prev').on('click', function() {
    $('.fourth').removeClass('hidden');
    $('.fourth').animate({
      'opacity': '1'
    }, 200);
    $('.fifth').addClass('hidden');
  });

// SIX
  $('.six').children('.next').on('click', function() {
    $('.seventh').removeClass('hidden');
    $('.seventh').animate({
      'opacity': '1'
    }, 200);
    $('.sixth').addClass('hidden');
  });
  $('.six').children('.prev').on('click', function() {
    $('.fifth').removeClass('hidden');
    $('.fifth').animate({
      'opacity': '1'
    }, 200);
    $('.sixth').addClass('hidden');
  });

// SEVENTH
  $('.seven').children('.next').on('click', function() {
    $('.eighth').removeClass('hidden');
    $('.eighth').animate({
      'opacity': '1'
    }, 200);
    $('.seventh').addClass('hidden');
  });
  $('.seven').children('.prev').on('click', function() {
    $('.sixth').removeClass('hidden');
    $('.sixth').animate({
      'opacity': '1'
    }, 200);
    $('.seventh').addClass('hidden');
  });

// EIGHTH
  $('.eight').children('.next').on('click', function() {
    $('.ninth').removeClass('hidden');
    $('.ninth').animate({
      'opacity': '1'
    }, 200);
    $('.eighth').addClass('hidden');
  });
  $('.eight').children('.prev').on('click', function() {
    $('.seventh').removeClass('hidden');
    $('.seventh').animate({
      'opacity': '1'
    }, 200);
    $('.eighth').addClass('hidden');
  });

// NINTH
  $('.nine').children('.next').on('click', function() {
    $('.tenth').removeClass('hidden');
    $('.tenth').animate({
      'opacity': '1'
    }, 200);
    $('.ninth').addClass('hidden');
  });
  $('.nine').children('.prev').on('click', function() {
    $('.eighth').removeClass('hidden');
    $('.eighth').animate({
      'opacity': '1'
    }, 200);
    $('.ninth').addClass('hidden');
  });

// TENTH
  $('.ten').children('.prev').on('click', function() {
    $('.ninth').removeClass('hidden');
    $('.ninth').animate({
      'opacity': '1'
    }, 200);
    $('.tenth').addClass('hidden');
  });
});
