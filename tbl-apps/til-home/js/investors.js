define(['jquery','model'], function($,model) {

	var investors = {
		ui:$('<section class="row gray investors"></section>'),
		vcList:$('<div class="col-sm-6"></div>'),
		det:$('<div class="col-sm-6"></div>'),
		people:$('<div class="col-sm-12"></div>'),
		firms:$('<div class="col-sm-12"></div>'),
		vcIMG:function(type,name,position,pic){
			var item = $('<div class="inv-comm" data-type="'+type+'"></div>');
			var over = $('<div class="overlay"></div>');
			var copy = $('<div class="context"></div>')
			var title = $('<p>'+name+'</p>');
			var loc = $('<p class="italics">'+position+'</p>');
			item.css({'background':'url('+pic+') no-repeat center center','-webkit-background-size':'cover','-moz-background-size':'cover','background-size':'cover'});

			item.append(over.append(copy.append(title)));
			if(position !== ''){copy.append(loc);}

			return item;
		},
		headline:$('<h2>'+model.investor.title+'</h2>'),
		tagline:$('<h3>'+model.investor.subtitle+'</h3>'),
		body:$('<p>'+model.investor.copy+'</p>')
	};
	investors.ui.append(investors.vcList.append(investors.people).append(investors.firms)).append(investors.det);
	// model.investor.community.forEach(function(i){
	// 	investors.vcList.append(new investors.vcIMG(i.name,i.position,i.pic));
	// });
	investors.det.append(investors.headline).append(investors.tagline).append(investors.body);
	return investors;
});
