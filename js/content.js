define(['jquery','model'], function($,model) {

	var content = {
		ui:$('<section class="row"></section>'),
		mine:$('<div class="col-sm"></div>'),
		land:$('<div class="col-sm"></div>'),
		temp:$('<div class="col-sm"></div>'),
		work:$('<div class="col-sm"></div>'),
		myHead:$('<h3>Personal Work</h3>'),
		landHead:$('<h3>Landing Pages</h3>'),
		tempHead:$('<h3>Sign Up Flows</h3>'),
		workHead:$('<h3>Prototypes</h3>'),
		myList:$('<ul class="project-list list-unstyled" data-type="personal"></ul>'),
		landList:$('<ul class="project-list list-unstyled" data-type="landing"></ul>'),
		tempList:$('<ul class="project-list list-unstyled" data-type="temp"></ul>'),
		workList:$('<ul class="project-list list-unstyled" data-type="proto"></ul>'),
		proj:function(type,url,name){
			var item = $('<li class="project-item" data-type="'+type+'"></li>');
			var link = $('<a href="'+url+'" target="_self"></a>');
			var title = $('<p>'+name+'</p>');

			item.append(link.append(title));

			return item;
		}
	};
	content.ui.append(content.mine).append(content.land).append(content.temp).append(content.work);
	content.mine.append(content.myHead).append(content.myList);
	content.land.append(content.landHead).append(content.landList);
	content.temp.append(content.tempHead).append(content.tempList);
	content.work.append(content.workHead).append(content.workList);
	_.where(model.projectList).forEach(function(i){
		if(i.type === 'personal'){
			content.myList.append(new content.proj(i.type,i.url,i.name));
		}
		if(i.type === 'landing'){
			content.landList.append(new content.proj(i.type,i.url,i.name));
		}
		if(i.type === 'temp'){
			content.tempList.append(new content.proj(i.type,i.url,i.name));
		}
		if(i.type === 'proto'){
			content.workList.append(new content.proj(i.type,i.url,i.name));
		}
	});

	return content;
});
