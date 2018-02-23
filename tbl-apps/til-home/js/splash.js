define(['jquery','model'], function($,model) {

	var splash = {
		ui:$('<section class="row splash"></section>'),
		container:$('<div class="col-sm-8 offset-sm-2 text-wrapper"></div>'),
		title:$('<h1 class="center capital text-shadow">'+model.introPanel.hook+'</h1>'),
		cta:$('<div class="cta-container center"></div>'),
		ctaBTN:function(){
			var item = $('<div class="btn btn-cta">'+model.introPanel.cta+'</div>');
			item.on('click',function(){

				console.log(url);
			});

			return item;
		},
		join:$('<div class="join-text"><h5 class="medium upper center text-shadow">'+model.introPanel.joinUs+' <a href="#" class="medium upper center text-shadow">'+model.introPanel.joinLink+'</a></h5></div>')
	};
	splash.ui.append(splash.container.append(splash.title).append(splash.cta.append(splash.ctaBTN).append(splash.join)));

	return splash;
});
