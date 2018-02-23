define(['jquery','model'], function($,model) {
	var explain = {
		ui:$('<div class="col-sm-12 light-accent-bg info"></div>'),
		container:$('<div class="col-sm-12 info-grp"></div>'),
		detailDesktop:function(name,info,url,link){
			var item = $('<div class="large hidden-md-down"></div>');
			var bar = $('<div class="secondary-bg"></div>');
			var head = $('<h3 class="primary">'+name+'</h3>');
			var copy = $('<p class="primary">'+info+'</p>');
			var link = $('<a href="'+url+'" target="_self">'+link+'</a>');
			item.append(bar).append(head).append(copy).append(link);

			return item;
		},
		detailPhone:function(name,info,url,link){
			var item = $('<div class="small col-sm-12 hidden-lg-up"></div>');
			var head = $('<h3 class="primary">'+name+'</h3>');
			var copy = $('<p class="primary">'+info+'</p>');
			var link = $('<a href="'+url+'" target="_self">'+link+'</a>');
			item.append(head).append(copy).append(link);

			return item;
		}
	};
	explain.ui.append(explain.container);
	model.desc.forEach(function(i){
		explain.container.append(new explain.detailDesktop(i.name,i.info,i.url,i.link));
	});
	model.desc.forEach(function(i){
		explain.container.append(new explain.detailPhone(i.name,i.info,i.url,i.link));
	});
	return explain;
});
