define(['jquery','model'], function($,model) {

	var dialog = {
		ui:$('<div class="dialog hidden"></div>'),
		secInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Candidate</h3>');
			var sub = $('<h5 class="">Please provide the name and email of the exceptional woman leaders you want to recommend for board opportunities</h5>');
			var a1 = $('<div class="form-group col-sm-6"><label>First Name</label><input class="form-control" type="text" name="entry.1740424515"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label>Last Name</label><input class="form-control" type="text" name="entry.1862008726"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label>Email Address</label><input class="form-control" type="text" name="entry.784535943"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label>Current Company</label><input class="form-control" type="text" name="entry.456379967"></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		secboard:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="entry.103764983" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="entry.103764983" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="entry.103764983" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="entry.103764983" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="entry.103764983" value="Advisory">Advisory board</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="entry.103764983" value="Non-Profit">Non-Profit board</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		secEndorsement:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="endorsement">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="endorsement" name="entry.1940622253" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sub: function(){
			var item = $('<div class="col-sm-12 form-group submit"></div>');
      var button = $('<button type="submit" class="btn btn-primary col-sm-5">Submit</button>');
			item.append(button);

			return item;
		}
	};
	dialog.ui.append(dialog.secInfo).append(dialog.secboard).append(dialog.secEndorsement).append(dialog.sub);

	return dialog;
});
