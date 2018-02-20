$('document').ready(function(){

  // $('.add').on('click',function(){
  //   if ($('.opened').hasClass('ninth')) {
  //     $('.opened').next('.multi-form').removeClass('hidden').addClass('opened');
  //     btn.addClass('hidden');
  //   } else if($('.opened').hasClass('first')){
  //     $('.first').css({'padding-bottom':'56px'});
  //     $('.opened').next('.multi-form').removeClass('hidden').addClass('opened');
  //   }else {
  //     $('.multi-form .opened').removeClass('opened');
  //     $('.opened').next('.multi-form').removeClass('hidden').addClass('opened');
  //   }
  // });

  var createAllErrors = function() {
    var form = $(this),
      errorList = $('.errors');
    var showAllErrorMessages = function() {
      errorList.empty();
      var invalidFields = form.find(':invalid').each(function(i) {
        var label = $('label[for=' + i.id + '] '),
          message = i.validationMessage || 'Invalid value.';
        errorList.show().append('<li><span>' + label.html() + '</span> ' + message + '</li>');
        console.log('BOOM');
      });

    };
    form.on('submit', function(event) {
      if (this.checkValidity && !this.checkValidity()) {
        $(this).find(":invalid").first().focus();
        event.preventDefault();
      }
    });
    $('input[type=submit]', form).on('click', showAllErrorMessages);
    $('input', form).on('keypress', function(event) {
      var type = $(this).attr('type');
      if (/date|email|month|number|search|tel|text|time|url|week/.test(type) && event.keyCode == 13) {
        showAllErrorMessages();
      }
    });
  };
  $('form').each(createAllErrors);
});
