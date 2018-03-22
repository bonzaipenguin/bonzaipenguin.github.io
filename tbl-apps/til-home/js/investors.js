define(['jquery','model'], function($,model) {

	var investors = {
		ui:$('<section class="row gray investors"></section>'),
		vcList:$('<div class="col-xl-4 offset-xl-2 col-sm-6"></div>'),
		det:$('<div class="col-xl-6 col-5"></div>'),
		people:$('<div class="col-sm-12"></div>'),
		firms:$('<div class="col-sm-12"></div>'),
		vcIMG:function(type,pic,name,position){
			var item = $('<div class="inv-comm" data-type="'+type+'"></div>');
			var pic = $('<div class="invest-img"><img src="'+pic+'" class="img-fluid"/></div>')
			var over = $('<div class="overlay"></div>');
			var copy = $('<div class="context"></div>')
			var title = $('<p>'+name+'</p>');
			var loc = $('<p class="italics">'+position+'</p>');

			item.append(pic).append(over.append(copy.append(title)));
			if(position !== ''){copy.append(loc);}

			item.hover(
		    function(){
		      item.children('.overlay').stop( true ).delay(200).animate({'opacity':'0.6'},300);
		      item.children('.invest-img').addClass('blur');
		  },function(){
		      item.children('.overlay').stop( true ).animate({'opacity':'0'},300);
		      item.children('.invest-img').removeClass('blur');
		  });

			return item;
		},
		headline:$('<h2 class="light upper">'+model.investor.title+'</h2>'),
		tagline:$('<h5>'+model.investor.subtitle+'</h5>'),
		body:$('<p>'+model.investor.copy+'</p>')
	};
	investors.ui.append(investors.vcList.append(investors.people).append(investors.firms)).append(investors.det);
	model.investor.community.forEach(function(i){
		investors.vcList.append(new investors.vcIMG(i.type,i.pic,i.name,i.position));
	});
	investors.det.append(investors.headline).append(investors.tagline).append(investors.body);
	return investors;
});
