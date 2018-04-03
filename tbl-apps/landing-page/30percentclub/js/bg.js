define(['jquery','model'], function($,model) {
	var bg = {
		ui:function(){
			var $img = $('<div class="background"></div>');
			$img.css({'position':'fixed','top':'0','left':'0','right':'0','height':'535px','background':'url('+model.bgImg+') no-repeat top center fixed'});

			return $img
		}
	};
	return bg;
});
