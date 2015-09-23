define(['jquery','model','bootstrap'], function($,model,bootstrap) {

	var ui = {
		ui: $('<section class="container-fluid"></section>'),
		headerRow: $('<header></header>'),
		mainRow: $('<div class="row"></div>')
	};
	ui.ui.append(ui.headerRow).append(ui.mainRow);


	return ui;
});