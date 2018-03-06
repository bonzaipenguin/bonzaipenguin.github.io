define(['jquery','model','content'], function($,model,content) {

	var ui = {
		ui: $('<section class="container-fluid"></section>'),
		headerRow: $('<header></header>'),
		mainRow: $('<div class="row"></div>')
	};
	ui.ui.append(ui.headerRow).append(ui.mainRow);
	ui.mainRow.append(content.ui);


	return ui;
});
