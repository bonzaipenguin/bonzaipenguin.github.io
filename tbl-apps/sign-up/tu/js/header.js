define(['jquery'], function($) {

	var header = {
		ui:$('<div class="col-md-2 col-sm-3 col-xs-4 nav-wrapper"></div>'),
		name:$('<img class="img-responsive" src="https://dtlk3t7g5mpz3.cloudfront.net/images/organizations/theboardlist/boardlist-logo-2.png">')
	};
	header.ui.append(header.name);
	return header;
});
