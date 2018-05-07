define(['jquery','model'], function($,model) {

	var header = {
		ui:$('<div class="header row"></div>'),
		logo:$('<div class="logo"><img src="'+model.logoW+'" class="img-fluid"></div>'),
		partner:$('<div class="visa"><span>'+model.visaW.tag+'</span><img src="'+model.visaW.logo+'" class="img-fluid"></div>')
	}
	header.ui.append(header.logo).append(header.partner);

	return header;
});
