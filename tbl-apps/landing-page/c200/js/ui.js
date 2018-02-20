define(['jquery','model'], function($,model) {

	var ui = {
		ui: $('<section class="col-md-8 col-sm-10 col-xs-12 col-md-offset-2 col-sm-offset-1"></section>'),
		mainRow:$('<div class="row main-row"></div>')
	};
	ui.ui.append(ui.mainRow);

	return ui;
});
