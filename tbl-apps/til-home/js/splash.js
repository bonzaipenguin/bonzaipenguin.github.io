define(['jquery','model'], function($,model) {

	var splash = {
		ui:$('<div class="layer splash"></div>'),
		container:$('<div class="col-sm-6 col-sm-offset-3 text-wrapper"></div>'),
		title:$('<h1 class="center text-shadow">'+model.introPanel.hook+'</h1>'),
		cta:$('<div class="cta-container"></div>'),
		ctaBTN:function(){
			var item = $('<div class="btn btn-cta">'+model.introPanel.cta+'</div>');
			item.on('click',function(){
				
				console.log(url);
			});

			return item;
		},
		join:$('<div class="join-text medium upper center text-shadow"><h4>'+model.introPanel.joinUs+'</h4><a href="#">'+model.introPanel.joinLink+'</a></div>')
	};
	splash.ui.append(splash.container.append(splash.title).append(splash.cta.append(splash.ctaBTN).append(splash.join)));

	return splash;
});
