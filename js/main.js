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
        },
        'bootstrap': ['jquery'],
        'crossroads': ['signals'],
        'hasher': ['signals']
    }
});


require( ['model','jquery','underscore','signals','crossroads','hasher'], function (model,$,_,signals,crossroads,hasher) { // first order includes



    // ADD SOME ROUTES
    var apiKey = crossroads.addRoute('/api/{key}', function(key){
      model.apiKey = key;
    });

    //setup hasher
    function parseHash(newHash, oldHash){
      crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash); // parse initial hash
    hasher.changed.add(parseHash); //parse hash changes
    hasher.init(); //start listening for history change

        

    require(['controller','ui'], function(controller,ui) { // second order includes
        function init() {
    		console.log(model.apiKey);
            $('[data-el="appView"]').append(ui.ui);
    	}
    	init();
    });
});