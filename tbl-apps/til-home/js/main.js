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


require( ['model','jquery'], function (model,$) {
  require(['ui'], function(ui) {
    function init() {
      $('body').prepend(ui.ui);
  	}
  	init();
  });
});
