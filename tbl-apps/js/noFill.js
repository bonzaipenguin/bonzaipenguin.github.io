define(['jquery','model'], function($,model) {

	var noFill = {
		ui:$('<div class="layer candidate no-fill"></div>'),
		// reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		// reFrame:$('<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted)  {window.location="www.theboardlist.com";}"></iframe>'),
		form:$('<form action="https://docs.google.com/forms/d/e/1FAIpQLSeIGwgns6BjJYlAwD59WvrBJ_M9v5Uml51-1BgAVQA96P6SGQ/formResponse" target="hidden_iframe" method="POST" onsubmit="submitted=true;" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application"></form>'),
		pageTitle:$('<h2 class="col-sm-12 form-title">Candidate Application</h2>'),
		basicInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Basic Info</h3>');
			var a1 = $('<div class="form-group col-sm-6 required><label for="">First Name</label><input class="form-control" type="text" name=""></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="">Last Name</label><input class="form-control" type="text" name=""></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="">LinkedIn Profile</label><input class="form-control" type="text" name=""></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="">Personal Email Address</label><input class="form-control" type="text" name=""></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		boardInfo:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var title = $('<h3 class="blue">Your Board Experience</h3>');
			var sub = $('<h5 class="sub-title">We suggest, though it\'s not required, that candidate meet one of the below criteria:</h5>');
			var qualList = $('<ul></ul>');
			var qual1 = $('<li>Influencer, thought leader, or domain expert in her industry</li>');
			var qual2 = $('<li>CEO or Founder of a company with at least $5m+ revenue</li>');
			var qual3 = $('<li>CEO, C-suite (or VP+) at companies with $25m+ revenue</li>');
			var qual4 = $('<li>Directors at companies with $500m+ revenue</li>');
			var cta = $('<h5 class="required">Click all that apply:</h5>');
			var a1 = $('<div class="form-check col-sm-12"><label class="form-check-label" for=""><input class="form-check-input" type="checkbox" name="" value="Non-Profit">Non-Profit board</label></div>');
			var a2 = $('<div class="form-check col-sm-12"><label class="form-check-label" for=""><input class="form-check-input" type="checkbox" name="" value="Public">Public board</label></div>');
			var a3 = $('<div class="form-check col-sm-12"><label class="form-check-label" for=""><input class="form-check-input" type="checkbox" name="" value="Private">Private board</label></div>');
			var a4 = $('<div class="form-check col-sm-12"><label class="form-check-label" for=""><input class="form-check-input" type="checkbox" name="" value="Advisory">Advisory board</label></div>');
			var a5 = $('<div class="form-check col-sm-12"><label class="form-check-label" for=""><input class="form-check-input" type="checkbox" name="" value="None">N/A</label></div>');

			item.append(title).append(sub).append(qualList).append(cta).append(a1).append(a2).append(a3).append(a4).append(a5);
			qualList.append(qual1).append(qual2).append(qual3).append(qual4);

			return item;
		},
		endorserInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Endorser</h3>');
			var sub = $('<h5>Ask someone who meets <span class="medium orange">the criteria for an Endorser Member</span> to join theBoardlist and nominate you.</h5>')
			var a1 = $('<div class="form-group col-sm-6"><label for="">First Name</label><input class="form-control" type="text" name=""></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="">Last Name</label><input class="form-control" type="text" name=""></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="">Email Address</label><input class="form-control" type="text" name=""></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3);

			return item;
		},
		sub: function(){
			var item = $('<div class="col-sm-12 col-xs-12 form-group submit-btn"></div>');
      var button = $('<button type="submit" class="btn btn-primary col-sm-2">Submit</button>');
			item.append(button);

			return item;
		}
	};
	noFill.ui.append(noFill.form);
	noFill.form.append(noFill.pageTitle).append(noFill.basicInfo).append(noFill.boardInfo).append(noFill.endorserInfo).append(noFill.sub);


	return noFill;
});
