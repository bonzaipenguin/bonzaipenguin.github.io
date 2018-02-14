require.config({
  paths: {
    'jquery': 'jquery'
  },
  shim: {
    'jquery': {
      exports: '$'
    }
  }
});


require( ['jquery'], function ($) {
  require(['ui'], function(ui) {
    function init() {
      $('body').prepend(ui.ui);
  	}
	   init();
  });
});
