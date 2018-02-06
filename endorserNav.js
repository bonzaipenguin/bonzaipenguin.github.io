$('document').ready(function(){
  
  $('.add').on('click',function(){
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

  var createAllErrors = function() {
    var form = $(this),
      errorList = $('ul.errorMessages', form);
    var showAllErrorMessages = function() {
      errorList.empty();
      var invalidFields = form.find(':invalid').each(function(index, node) {
        var label = $('label[for=' + node.id + '] '),
          message = node.validationMessage || 'Invalid value.';
        errorList.show().append('<li><span>' + label.html() + '</span> ' + message + '</li>');
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
