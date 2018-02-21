define(['jquery','model'], function($,model) {

	var header = {
		ui:$('<div class="col-lg-10 col-lg-offset-1 col-med-12"></div>'),
		name:$('<h2 class="col-lg-3 col-med-6 til-logo">'+model.logo+'</h2>'),
		nav:$('<ul class="col-lg-6 col-med-12 col-xs-hidden list-inline list-unstyled center top-nav"></ul>'),
		navItem: function(url,name){
			var item = $('<li><a href="'+url+'" target="_blank">'+name+'</a></li>');

			return item
		},
		user:$('<div class="user-profile"></div>'),
		userImg:function(){
			var item = $('<div class="avatar"></div>');
			item.css({
				'background':'url('+model.avatar+') no-repeat center center',
				'background-size':'cover',
				'border':'2px solid #ffffff',
				'border-radius':'50%',
				'height':'48px',
				'width':'48px',
				'box-shadow':'0 0 2px 0 rgba(0,0,0,0.12),0 2px 2px 0 rgba(0,0,0,0.24)'
			});
			item.on('click',function(){
				if ($('.user-menu').hasClass('hidden')) {
					console.log('yup');
					$('.user-menu').removeClass('hidden');
				} else {
					console.log('nope');
					$('.user-menu').addClass('hidden');
				}
			});
			return item
		},
		dd:$('<div class="user-menu hidden"></div>'),
		ddList:$('<ul class="list-unstyled drop-down"></ul>'),
		ddItem:function(url,name){
			var item = $('<li><a href="'+url+'" target="_blank">'+name+'</a></li>');

			return item
		}
	};
	header.ui.append(header.name).append(header.nav).append(header.user);

	model.topNav.forEach(function(i){
		header.nav.append(new header.navItem(i.url,i.name));
	});

	header.user.append(header.userImg).append(header.dd.append(header.ddList));
	model.userList.forEach(function(i){
		header.ddList.append(new header.ddItem(i.url,i.name));
	});

	return header;
});
