define(['jquery','model'], function($,model) {
	var splash = {
		ui:$('<div class="col-sm-12 col-xs-12 splash"></div>'),
		content:$('<div class="col-sm-8 col-xs-12 content"></div>'),
		callOut:$('<h1 class="col-sm-12 light center">'+model.hook+'</h1>'),
		btngrp:$('<div class="col-sm-12 cta-btns center"></div>'),
		cta:function(name,url){
			var item = $('<a href="'+url+'" class="btn btn-primary">'+name+'</a>');

			return item;
		}
	};
	splash.ui.append(splash.content)
	splash.content.append(splash.callOut).append(splash.btngrp);

	model.ctaBtns.forEach(function(i){
		splash.btngrp.append(new splash.cta(i.name,i.url));
	});

	return splash;
});
