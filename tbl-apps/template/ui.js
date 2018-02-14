define(['jquery','model','header','candidate','endorser','searcher','confirmation'], function($,model,header,candidate,endorser,searcher,confirmation) {

	var ui = {
		ui: $('<section class="container-fluid"></section>'),
		headerRow: $('<div class="header row"><div class="orange-band"></div></div>'),
		mainRow: $('<div class="col-sm-12"></div>')
	};
	ui.ui.append(ui.headerRow).append(ui.mainRow);
	ui.headerRow.append(header.ui);
	ui.mainRow.append(candidate.ui);
	ui.mainRow.css({'padding-top':'24px'});

	return ui;
});
