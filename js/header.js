define(['jquery','model','controller'], function($,model,controller) {

	var header = {
		ui: $('<div class="elements"></div>'),
		logo: $('<h5 class="cl-icon-font logo pull-left">CREATIVELIVE</h5>'),
		onAir: $('<h5 class="hidden-xs on-air nav-tool medium pull-left">on air</h5>'),
		classes: $('<h5 class="hidden-xs nav-tool medium gray3 pull-left">classes</h5>'),
		blog: $('<h5 class="hidden-xs nav-tool medium gray3 pull-left">blog</h5>'),
		search: $('<h5 class="hidden-xs nav-tool gray3 pull-right search streamline">&#xe01f;</h5>'),
		cart: $('<h5 class="hidden-xs nav-tool gray3 pull-right cart streamline">&#xe196;</h5>'),
		login: function(){
			var $login = $('<h5 class="hidden-xs nav-tool gray3 pull-right medium">login</h5>');

			$login.on('click',function(){
				if($login.hasClass('auth')){
					$login.removeClass('auth');
					$login.text('login');
					header.cart.hide();
				}else{
					$login.addClass('auth');
					$login.text('');
					header.cart.show();
				}
			});

			// FOR AUTH VIEW ONLY
			// $login.addClass('auth');
			// $login.text('');
			// header.cart.show();

			return $login;
		}
	}
		header.ui.append(header.logo).append(header.onAir).append(header.classes).append(header.blog).append(header.login).append(header.cart).append(header.search);


	return header;
});