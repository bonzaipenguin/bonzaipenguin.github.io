define(['jquery','model'], function($,model) {

	var header = {
		ui:$('<div class="col-md-12 nav-wrapper"></div>'),
		name:$('<h2 class="col-lg-3 col-md-6 tbl-logo">'+model.logo+'</h2>')
	};
	header.ui.append(header.name);
	return header;
});
