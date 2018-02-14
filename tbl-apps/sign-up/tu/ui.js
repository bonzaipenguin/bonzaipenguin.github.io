define(['jquery','model','header','endorser','candidate','searcher','confirmation'], function($,model,header,endorser,candidate,searcher,confirmation) {

	var ui = {
		ui: $('<section class="container-fluid"></section>'),
		headerRow: $('<div class="header row"><div class="orange-band"></div></div>'),
		mainRow: $('<div class="col-sm-12"></div>')
	};
	ui.ui.append(ui.headerRow).append(ui.mainRow);
	ui.headerRow.append(header.ui);
	ui.mainRow.append(searcher.ui);
	ui.mainRow.css({'padding-top':'24px'});

	return ui;
});
