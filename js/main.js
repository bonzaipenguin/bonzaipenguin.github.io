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


require( ['model','jquery','underscore','signals'], function (model,$,_,signals) { // first order includes
 require(['controller','ui'], function(controller,ui) { // second order includes
    function init() {
      $('[data-el="portfolio"]').append(ui.ui);
    }
  	init();
  });
});