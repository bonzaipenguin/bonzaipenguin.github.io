define(['jquery','model'], function($,model) {

	var content = {
		ui:$('<section class="row"></section>'),
		mine:$('<div class="col-sm"></div>'),
		land:$('<div class="col-sm"></div>'),
		sign:$('<div class="col-sm"></div>'),
		myHead:$('<h3>Personal Work</h3>'),
		landHead:$('<h3>Landing Pages</h3>'),
		signHead:$('<h3>Sign Up Flows</h3>'),
		myList:$('<ul class="project-list list-unstyled" data-type="personal"></ul>'),
		landList:$('<ul class="project-list list-unstyled" data-type="work"></ul>'),
		signList:$('<ul class="project-list list-unstyled" data-type="work"></ul>'),
		projs:function(type,group,url,name){
			var item = $('<li class="project-item" data-type="'+type+'" data-group"'+group+'"></li>');
			var link = $('<a href="'+url+'" target="_self"></a>');
			var title = $('<p>'+name+'</p>');

			if(group == null){console.log('hidden');}

			item.append(link.append(title));

			return item;
		}
	};
	content.ui.append(content.mine).append(content.land).append(content.sign);
	content.mine.append(content.myHead).append(content.myList);
	content.land.append(content.landHead).append(content.landList);
	content.sign.append(content.signHead).append(content.signList);
	model.projectList.forEach(function(i){
		content.myList.append(new content.projs(i.type,i.group,i.url,i.name));
	});

	return content;
});
