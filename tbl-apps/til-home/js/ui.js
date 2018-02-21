define(['jquery','model','bg','header','splash','tech','general','investors','benefits','footer'], function($,model,bg,header,splash,tech,general,investors,benefits,footer) {

	var ui = {
		ui: $('<section class="container-fluid"></section>'),
		headerRow: $('<header class="row"></header>'),
		mainRow: $('<div class="row"></div>'),
		footerRow:$('<footer class="row gray"></footer>'),
	};
	ui.ui.append(bg.ui);
	ui.ui.append(ui.headerRow.append(header.ui)).append(ui.mainRow).append(ui.footerRow.append(footer.ui));
	ui.mainRow.append(splash.ui).append(tech.ui).append(general.ui).append(investors.ui).append(benefits.ui);


	return ui;
});
