define(['jquery','model','header','noFill','fill','endorser','dialog','confirmation'], function($,model,header,noFill,fill,endorser,dialog,confirmation) {

	var ui = {
		ui: $('<section class="container-fluid"></section>'),
		headerRow: $('<div class="header row"><div class="orange-band"></div></div>'),
		mainRow: $('<div class="col-sm-12"></div>')
	};
	ui.ui.append(ui.headerRow).append(ui.mainRow);
	ui.headerRow.append(header.ui);
	ui.mainRow.append(noFill.ui);
	ui.mainRow.append(fill.ui);
	ui.mainRow.css({'padding-top':'24px'});

	return ui;
});
