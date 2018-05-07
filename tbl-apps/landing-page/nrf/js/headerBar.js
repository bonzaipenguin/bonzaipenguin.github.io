define(['jquery','model'], function($,model) {

	var header = {
		ui:$('<div class="header row"></div>'),
		bar:$('<div class="white-bar"></div>'),
		logo:$('<div class="logo"><img src="'+model.logoP+'" class="img-fluid"></div>'),
		partner:$('<div class="visa"><span>'+model.visaP.tag+'</span><img src="'+model.visaP.logo+'" class="img-fluid"></div>'),
		blue:$('<div class="blue-bg"></div>')
	}
	header.ui.append(header.bar.append(header.logo).append(header.partner));

	return header;
});
