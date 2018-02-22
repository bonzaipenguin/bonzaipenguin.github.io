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


require( ['model','jquery'], function (model,$) { // first order includes
  require(['ui'], function(ui) { // second order includes
    function init() {
      $('body').append(ui.ui);
  	}
  	init();
  });
});
