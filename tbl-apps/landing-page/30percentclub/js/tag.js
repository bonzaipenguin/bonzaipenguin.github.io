define(['jquery','model'], function($,model) {
	var tag = {
		ui:$('<div class="col-md-12 hidden-sm-down tag"></div>'),
		callOut:$('<h2 class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 center blue">'+model.tagline+'</h2>')
	};
	tag.ui.append(tag.callOut);
	return tag;
});
