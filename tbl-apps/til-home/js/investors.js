define(['jquery','model'], function($,model) {

	var investors = {
		ui:$('<section class="row gray investors"></section>'),
		vcList:$('<div class="col-sm-6"></div>'),
		det:$('<div class="col-sm-6"></div>'),
		vcIMG:function(type,pic){
			var item = $('<img class="'+type+' img-fluid" src="'+pic+'"/>');

			return item;
		},
		headline:$('<h2>'+model.investors.title+'</h2>'),
		tagline:$('<h3>'+model.investors.subtitle+'</h3>'),
		body:$('<p>'+model.investors.copy+'</p>')
	};
	
	return investors;
});
