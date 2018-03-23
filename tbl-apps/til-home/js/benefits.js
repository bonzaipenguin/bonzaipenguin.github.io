define(['jquery','model'], function($,model) {

	var benefits = {
		ui:$('<section class="row white benefits"></section>'),
		cont:$('<div class="col-12"></div>'),
		headline:$('<h2 class="light upper center">'+model.benefit.title+'</h2>'),
		tagline:$('<h5 class="center">'+model.benefit.subtitle+'</h5>'),
		statList:$('<div class="row benefit-list"></div>'),
		stats:function(stat,context){
			var item = $('<div class="col-sm-4 stat"></div>');
			var co = $('<h3 class="heavy blue center">'+stat+'</h3>');
			var desc = $('<p class="center">'+context+'</p>');
			item.append(co).append(desc);

			return item;
		}
	};
	benefits.ui.append(benefits.cont.append(benefits.headline).append(benefits.tagline).append(benefits.statList));
	model.benefit.coList.forEach(function(i){
		benefits.statList.append(new benefits.stats(i.stat,i.context));
	});
	return benefits;
});
