define(['jquery','model'], function($,model) {

	var header = {
		ui:$('<header class="row"></header>'),
		name:$('<div class="col-sm col-10"><h2 class="til-logo">'+model.logo+'</h2></div>'),
		nav:$('<ul class="col-sm d-hidden d-none d-xl-block list-inline list-unstyled center top-nav"></ul>'),
		navItem: function(url,name){
			var item = $('<li class="list-inline-item"><a href="'+url+'" target="_blank">'+name+'</a></li>');

			return item;
		},
		rThird:$('<div class="col-sm col-2"></div>'),
		user:$('<div class="d-none d-xl-block user-profile"></div>'),
		userImg:function(){
			var item = $('<div class="avatar"></div>');
			item.css({
				'background':'url('+model.avatar+') no-repeat center center',
				'background-size':'cover',
				'border':'2px solid #ffffff',
				'border-radius':'50%',
				'height':'45px',
				'width':'45px',
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
			return item;
		},
		userDD:$('<div class="user-menu hidden"></div>'),
		userList:$('<ul class="list-unstyled drop-down"></ul>'),
		userItem:function(url,name){
			var item = $('<li><a href="'+url+'" target="_blank">'+name+'</a></li>');

			return item;
		},
		mNav:$('<div class="d-xl-none mobile-nav text-right"></div>'),
		mobileIcon:function(){
			var item = $('<i class="material-icons">menu</i>');
			item.on('click',function(){
				if ($('.mobile-menu').hasClass('hidden')) {
					console.log('yup');
					$('.mobile-menu').removeClass('hidden');
				} else {
					console.log('nope');
					$('.mobile-menu').addClass('hidden');
				}
			});

			return item;
		},
		mobileDD:$('<div class="mobile-menu hidden"></div>'),
		mobileList:$('<ul class="list-group list-group-flush drop-down text-left"></ul>'),
		mobileItem:function(url,name){
			var item = $('<li class="list-group-item"><a href="'+url+'" target="_blank">'+name+'</a></li>');

			return item;
		}
	};
	header.ui.append(header.name).append(header.nav).append(header.rThird);

	model.topNav.forEach(function(i){
		header.nav.append(new header.navItem(i.url,i.name));
		header.mobileList.append(new header.mobileItem(i.url,i.name));
	});

	header.rThird.append(header.user).append(header.mNav);
	header.mNav.append(header.mobileIcon).append(header.mobileDD.append(header.mobileList));

	header.user.append(header.userImg).append(header.userDD.append(header.userList));
	model.userList.forEach(function(i){
		header.userList.append(new header.userItem(i.url,i.name));
		header.mobileList.append(new header.mobileItem(i.url,i.name));
	});

	return header;
});
