define(['jquery','model','bg','header','splash','tag','explain','learn'], function($,model,bg,header,splash,tag,explain,learn) {

	var ui = {
		ui: $('<section class="container-fluid"></section>'),
		mainRow:$('<div class="row"></div>'),
		footerRow:$('<footer class="col-sm-12 gray-bg"></footer>')
	};
	ui.ui.append(bg.ui).append(header.ui).append(ui.mainRow);
	ui.mainRow.append(splash.ui).append(tag.ui).append(explain.ui).append(learn.ui).append(ui.footerRow);

	return ui;
});
