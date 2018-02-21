define(['jquery','model'], function($,model) {
	var tag = {
		ui:$('<div class="col-sm-12 tag"></div>'),
		callOut:$('<h2 class="col-lg-8 col-lg-offset-2 col-md-8 col-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 center blue">'+model.tagline+'</h2>')
	};
	tag.ui.append(tag.callOut);
	return tag;
});
