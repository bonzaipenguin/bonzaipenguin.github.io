define(['jquery','model'], function($,model) {

	var bg = {
		ui:function(){
			var $img = $('<div class="background"></div>');

			$img.css({'position':'fixed','top':'0','left':'0','right':'0','bottom':'0','background':'url('+model.introPanel.splashImg+') no-repeat center center fixed','background-size':'cover'});

			return $img
		}
	};

	return bg;
});
