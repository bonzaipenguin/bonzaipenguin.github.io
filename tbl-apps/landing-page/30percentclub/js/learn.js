define(['jquery','model'], function($,model) {
	var learn = {
		ui:$('<div class="col-sm-12 learn"></div>'),
		title:$('<h2 class="col-sm-12 primary-dark center">Learn More</h2>'),
		orgLG:function(name,info,url,link){
			var item = $('<div class="org-lg visible-md-inline-block visible-lg-inline-block"></div>');
			var title = $('<h5 class="primary-dark">'+name+'</h5>');
			var copy = $('<p>'+info+'</p>');
			var link = $('<a href="'+url+'">'+link+'</a>');
			item.append(title).append(copy).append(link);

			return item;
		},
		orgSM:function(name,info,url,link){
			var item = $('<div class="org-sm col-sm-12 hidden-md hidden-lg"></div>');
			var title = $('<h5 class="primary-dark">'+name+'</h5>');
			var copy = $('<p>'+info+'</p>');
			var link = $('<a href="'+url+'">'+link+'</a>');
			item.append(title).append(copy).append(link);

			return item;
		}
	};
	learn.ui.append(learn.title);
	model.learning.forEach(function(i){
		learn.ui.append(new learn.orgLG(i.name,i.info,i.url,i.link));
	});
	model.learning.forEach(function(i){
		learn.ui.append(new learn.orgSM(i.name,i.info,i.url,i.link));
	});
	return learn;
});
