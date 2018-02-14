define(['jquery','model'], function($,model) {

	var confirmation = {
		ui:$('<div class="container"></div>'),
		centered:$('<div class="col-md-7 col-sm-12 centered-copy"></div>'),
		headline:$('<h3 class="center">Thank you for supporting women leaders and making your first candidate endorsements on&nbsptheBoardlist!</h3>'),
		copy:$('<p class="center">We will review your Endorser Member application and get back to you within the next two business days with a decision regarding your membership. Once a member, you will have access to theBoardlist and you will be able to endorse additional candidates at any&nbsptime.</p>'),
		help:$('<p class="center">In the meantime, if you have any questions, please don’t hesitate to contact us&nbspat<br/><a>support@theboardlist.com</a></p>')
	};
	confirmation.ui.append(confirmation.centered);
	confirmation.centered.append(confirmation.headline).append(confirmation.copy).append(confirmation.help);

	return confirmation;
});
