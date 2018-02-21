define(['jquery','model'], function($,model) {
	var learn = {
		ui:$('<div class="col-sm-12 learn"></div>'),
		title:$('<h2 class="col-sm-12 blue center">Learn More</h2>'),
		org:function(name,info,url,link){
			var item = $('<div class="org"></div>');
			var title = $('<h5 class="blue">'+name+'</h5>');
			var copy = $('<p>'+info+'</p>');
			var link = $('<a href="'+url+'">'+link+'</a>');
			item.append(title).append(copy).append(link);

			return item;
		}
	};
	learn.ui.append(learn.title);
	model.learning.forEach(function(i){
		learn.ui.append(new learn.org(i.name,i.info,i.url,i.link));
	});
	return learn;
});
