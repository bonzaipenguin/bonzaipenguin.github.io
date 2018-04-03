define(['jquery','model'], function($,model) {

	var header = {
		ui:$('<div class="header row"></div>'),
		logo:$('<div class="co-logo"><img src="'+model.logoImg+'" class="img-fluid"></div>')
	}
	header.ui.append(header.blue).append(header.logo);

	return header;
});
