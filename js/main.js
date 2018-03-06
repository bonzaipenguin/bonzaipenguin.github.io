require.config({
    paths: {
        'jquery': 'jquery',
        'underscore': 'underscore',
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    }
});


require( ['model','jquery','underscore'], function (model,$,_) {
 require(['ui'], function(ui) {
    function init() {
      $('body').append(ui.ui);
    }
  	init();
  });
});
