define(['jquery','underscore','model'], function($,_,model) {
	var verb = {
		ui:$('<div class="col-sm-12 table-view"></div>'),
		verbGroup:function(type,grouping,conjugation,pro,conj){
			var table = $('<div class="col-sm-12 suffix-table '+type+'" data-type="'+type+'"></div>');
			var title = $('<div class="group-header" data-type="'+grouping+'"><h6>'+grouping+'</h6></div>');
			var row = $('<div class="verb-row"></div>');
			var pronoun = $('<p class="col-sm-6">'+pro+'</p>');
			var change = $('<p class="col-sm-6">'+conj+'</p>');
			row.append(pronoun).append(change);
			table.append(title).append(row);

			return table;
		}
	};
	_.each(model.tables, function(i,v,k) {
	    console.log(v.pro);
	    verb.ui.append(new verb.verbGroup(i.type,i.grouping,i.conjugation));
	});


	return verb;
});