define(['jquery','model'], function($,model) {

	var mainMenu = {
		ui:$('<header class="row"></header>'),
		types:function(type,name){
			var tab = $('<div class="col-xs-4 col-sm-4 view-tab '+type+'">'+name+'</div>');
			return tab;
		}
	};
	model.optionList.forEach(function(i){
		mainMenu.ui.append(new mainMenu.types(i.type,i.name));
	});


	return mainMenu;
});