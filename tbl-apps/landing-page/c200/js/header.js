define(['jquery','model'], function($,model) {

	var header = {
		ui:$('<header class="row"></header>'),
		logo:$('<div class="col-lg-1 col-md-2 col-sm-3 logo"><img src="'+model.logoImg+'" class="img-fluid"></div>'),
		blue:$('<div class="blue-bg"></div>')
	}
	header.ui.append(header.blue).append(header.logo);

	return header;
});
