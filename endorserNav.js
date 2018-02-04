$('document').ready(function(){
// ONE
  $('.one-next').on('click', function() {
    $('.second').removeClass('hidden');
    $('.second').animate({
      'opacity': '1'
    }, 200);
    $('.second').addClass('opened');
    $('.first').addClass('hidden');
    $('.one-next').removeClass('col-sm-12').removeClass('btn-secondary').addClass('btn-low').html('<span>Next Candidate</span> <i class="material-icons">navigate_next</i>');
  });

// TWO
  $('.two > .next').on('click', function() {
    $('.third').removeClass('hidden');
    $('.third').animate({
      'opacity': '1'
    }, 200);
    $('.second').addClass('hidden');
    $('.two > .next').html('<span>Next Candidate</span> <i class="material-icons">navigate_next</i>');
  });
  $('.two > .prev').on('click', function() {
    $('.first').removeClass('hidden');
    $('.first').animate({
      'opacity': '1'
    }, 200);
    $('.second').addClass('hidden');
  });

// THREE
  $('.three > .next').on('click', function() {
    $('.fourth').removeClass('hidden');
    $('.fourth').animate({
      'opacity': '1'
    }, 200);
    $('.third').addClass('hidden');
    $('.three > .next').html('<span>Next Candidate</span> <i class="material-icons">navigate_next</i>');
  });
  $('.three > .prev').on('click', function() {
    $('.second').removeClass('hidden');
    $('.second').animate({
      'opacity': '1'
    }, 200);
    $('.third').addClass('hidden');
  });

// FOUR
  $('.four > .next').on('click', function() {
    $('.fifth').removeClass('hidden');
    $('.fifth').animate({
      'opacity': '1'
    }, 200);
    $('.fourth').addClass('hidden');
    $('.four > .next').html('<span>Next Candidate</span> <i class="material-icons">navigate_next</i>');
  });
  $('.four > .prev').on('click', function() {
    $('.third').removeClass('hidden');
    $('.third').animate({
      'opacity': '1'
    }, 200);
    $('.fourth').addClass('hidden');
  });

// FIVE
  $('.five > .next').on('click', function() {
    $('.sixth').removeClass('hidden');
    $('.sixth').animate({
      'opacity': '1'
    }, 200);
    $('.fifth').addClass('hidden');
  });
  $('.five > .prev').on('click', function() {
    $('.fourth').removeClass('hidden');
    $('.fourth').animate({
      'opacity': '1'
    }, 200);
    $('.fifth').addClass('hidden');
  });

// SIX
  $('.six > .next').on('click', function() {
    $('.seventh').removeClass('hidden');
    $('.seventh').animate({
      'opacity': '1'
    }, 200);
    $('.sixth').addClass('hidden');
  });
  $('.six > .prev').on('click', function() {
    $('.fifth').removeClass('hidden');
    $('.fifth').animate({
      'opacity': '1'
    }, 200);
    $('.sixth').addClass('hidden');
  });

// SEVENTH
  $('.seven > .next').on('click', function() {
    $('.eighth').removeClass('hidden');
    $('.eighth').animate({
      'opacity': '1'
    }, 200);
    $('.seventh').addClass('hidden');
  });
  $('.seven > .prev').on('click', function() {
    $('.sixth').removeClass('hidden');
    $('.sixth').animate({
      'opacity': '1'
    }, 200);
    $('.seventh').addClass('hidden');
  });

// EIGHTH
  $('.eight > .next').on('click', function() {
    $('.ninth').removeClass('hidden');
    $('.ninth').animate({
      'opacity': '1'
    }, 200);
    $('.eighth').addClass('hidden');
  });
  $('.eight > .prev').on('click', function() {
    $('.seventh').removeClass('hidden');
    $('.seventh').animate({
      'opacity': '1'
    }, 200);
    $('.eighth').addClass('hidden');
  });

// NINTH
  $('.nine > .next').on('click', function() {
    $('.tenth').removeClass('hidden');
    $('.tenth').animate({
      'opacity': '1'
    }, 200);
    $('.ninth').addClass('hidden');
  });
  $('.nine > .prev').on('click', function() {
    $('.eighth').removeClass('hidden');
    $('.eighth').animate({
      'opacity': '1'
    }, 200);
    $('.ninth').addClass('hidden');
  });

// TENTH
  $('.ten > .prev').on('click', function() {
    $('.ninth').removeClass('hidden');
    $('.ninth').animate({
      'opacity': '1'
    }, 200);
    $('.tenth').addClass('hidden');
  });
});
