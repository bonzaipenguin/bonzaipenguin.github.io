define(['jquery','model'], function($,model) {

	var header = {
		ui:$('<div class="row header"></div>'),
		logo:$('<div class="col-lg-1 col-md-2 col-sm-3 co-logo"><img src="'+model.logoImg+'" class="img-fluid"></div>'),
		bar:$('<div class="primary-bg"></div>')
	}
	header.ui.append(header.bar).append(header.logo);

	return header;
});
