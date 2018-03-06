define(['jquery','model'], function($,model) {

	var content = {
		ui:$('<section class=""></section>'),
		mine:$('<div class="col-sm"></div>'),
		work:$('<div class="col-sm"></div>'),
		myHead:$('<h3>Personal Work</h3>'),
		workHead:$('<h3>Work Projects</h3>'),
		myList:$('<ul class="project-list" data-type="personal"></ul>'),
		workList:$('<ul class="project-list" data-type="work"></ul>'),
		projs:function(type,url,name,group){
			var item = $('<li class="project-item" data-type="'+type+'"></li>');
			var link = $('<a href="'+url+'" target="_self"></a>');
			var title = $('<p>'+name+'</p>');
			var sort = $('<span>('+group+')</span>');

			if(group == null){console.log('hidden');sort.hide();}

			item.append(link.append(title.append(sort)));

			return item;
		}
	};
	content.ui.append(content.mine).append(content.work);
	content.mine.append(content.myHead).append(content.myList);
	content.work.append(content.workHead).append(content.workList);
	model.projectList.forEach(function(i){
		if(model.projectList.type == 'personal'){
			model.myList.append(new content.projs(i.type,i.url,i.name,i.group));
		}
		if(model.projectList.type == 'work'){
			model.workList.append(new content.projs(i.type,i.url,i.name,i.group));
		}
	});

	return content;
});
