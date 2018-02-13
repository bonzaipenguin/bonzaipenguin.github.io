define(['jquery','model'], function($,model) {

	var header = {
		ui:$('<div class="col-md-2 col-sm-3 col-xs-4 nav-wrapper"></div>'),
		name:function(){
			var item = $('<img class="img-responsive" src="https://dtlk3t7g5mpz3.cloudfront.net/images/organizations/theboardlist/boardlist-logo-2.png">');
			item.on('click',function(){
				if($('.fill').hasClass('hidden')){
					$('.fill').removeClass('hidden');
					$('.no-fill').addClass('hidden');
				}else if ($('.no-fill').hasClass('hidden')) {
					$('.no-fill').removeClass('hidden');
					$('.fill').addClass('hidden');
				}
			});
			return item;
		}
	};
	header.ui.append(header.name);
	return header;
});
