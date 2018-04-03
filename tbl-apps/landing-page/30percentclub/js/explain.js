define(['jquery','model'], function($,model) {
	var explain = {
		ui:$('<div class="col-sm-12 light-bg info"></div>'),
		container:$('<div class="col-sm-12 info-grp"></div>'),
		deetsLG:function(name,info,url,link){
			var item = $('<div class="large hidden-md-down"></div>');
			var bar = $('<div class="primary-dark-bg"></div>');
			var head = $('<h3 class="primary-dark">'+name+'</h3>');
			var copy = $('<p class="primary-dark">'+info+'</p>');
			var link = $('<a href="'+url+'">'+link+'</a>');
			item.append(bar).append(head).append(copy).append(link);

			return item;
		},
		deetsSM:function(name,info,url,link){
			var item = $('<div class="small col-sm-12 hidden-lg-up"></div>');
			var head = $('<h3 class="primary-dark">'+name+'</h3>');
			var copy = $('<p class="primary-dark">'+info+'</p>');
			var link = $('<a href="'+url+'">'+link+'</a>');
			item.append(head).append(copy).append(link);

			return item;
		}
	};
	explain.ui.append(explain.container);
	model.desc.forEach(function(i){
		explain.container.append(new explain.deetsLG(i.name,i.info,i.url,i.link));
	});
	model.desc.forEach(function(i){
		explain.container.append(new explain.deetsSM(i.name,i.info,i.url,i.link));
	});
	return explain;
});
