define(['jquery','model'], function($,model) {
	var tag = {
		ui:$('<div class="col-md-12 col-xs-12 hidden-sm hidden-xs tag"></div>'),
		callOut:$('<h2 class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 offset-sm-1 col-xs-12 center primary-dark">'+model.tagline+'</h2>')
	};
	tag.ui.append(tag.callOut);
	return tag;
});
