define(['jquery','model','content'], function($,model,content) {

	var ui = {
		ui: $('<section></section>'),
		mainRow: $('<div class="container-fluid"></div>')
	};
	ui.ui.append(ui.mainRow);
	ui.mainRow.append(content.ui);


	return ui;
});
