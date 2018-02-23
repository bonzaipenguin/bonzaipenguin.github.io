define(['jquery','model'], function($,model) {

	var footer = {
		ui:$('<footer class="row gray"></footer>'),
		content:$('<div class="col-sm-12"></div>')
	};
	footer.ui.append(footer.content);
	return footer;
});
