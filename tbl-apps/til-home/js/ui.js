define(['jquery','model','bg','header','splash','tech','general','investors','benefits','footer'], function($,model,bg,header,splash,tech,general,investors,benefits,footer) {

	var ui = {
		ui: $('<section class="container-fluid"></section>')
	};
	ui.ui.append(bg.ui);
	ui.ui.append(header.ui).append(splash.ui).append(tech.ui).append(general.ui).append(investors.ui).append(benefits.ui).append(footer.ui);


	return ui;
});
