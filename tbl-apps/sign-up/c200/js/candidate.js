define(['jquery'], function($) {

	var candidate = {
		ui:$('<div class="candidate"></div>'),
		// reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		// reFrame:$('<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted)  {window.location="www.theboardlist.com";}"></iframe>'),
		form:$('<form action="https://docs.google.com/forms/d/e/1FAIpQLScvgtvy6RHkHsI7q9nWhLc_1nYguVYTCwQWEnXY-Ir1xCZ_2Q/formResponse" target="hidden_iframe" method="POST" onsubmit="submitted=true;" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application"></form>'),
		pageTitle:$('<h2 class="col-sm-12 form-title">Candidate Application</h2>'),
		basicInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Basic Info</h3>');
			var a1 = $('<div class="form-group col-sm-6 required"><label for="entry.1015790028" class="required">First Name</label><input class="form-control" type="text" name="entry.1015790028"></div>');
			var a2 = $('<div class="form-group col-sm-6 required"><label for="entry.1317844887" class="required">Last Name</label><input class="form-control" type="text" name="entry.1317844887"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.942792878">LinkedIn Profile</label><input class="form-control" type="text" name="entry.942792878"></div>');
			var a4 = $('<div class="form-group col-sm-6 required"><label for="entry.808969688" class="required">Current Company</label><input class="form-control" type="text" name="entry.808969688"></div>');
			var a5 = $('<div class="form-group col-sm-6 required"><label for="entry.272533366" class="required">Current Title</label><input class="form-control" type="text" name="entry.272533366"></div>');
			var a6 = $('<div class="form-group col-sm-12 required"><label for="entry.1116197455" class="required">Personal Email Address</label><input class="form-control" type="email" name="entry.1116197455"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6);

			return item;
		},
		endorserInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Endorser</h3>');
			var sub = $('<h5>Request a nomination from someone you know who meets theBoardlist\'s Endorser Member criteria.</h5>');

			var exp1 = $('<div class=""><h6 class="sub-title italic">Endorsing Members must meet one of the below criteria:</h6></div>');
			var list1 = $('<ul></ul>');
			var i1 = $('<li>A CEO or C-suite of a company with at least one round of institutional funding</li>');
			var i2 = $('<li>A seed, VC, or a private equity investor, or</li>');
			var i3 = $('<li>An influencer, thought leader, or domain expert in their industry</li>');

			var exp2 = $('<div class=""><h6 class="sub-title italic">And must have experience serving on:</h6></div>');
			var list2 = $('<ul></ul>');
			var i4 = $('<li>A Public Board</li>');
			var i5 = $('<li>A Private Board</li>');
			var i6 = $('<li>A Non-Profit Board</li>');

			var a1 = $('<div class="form-group col-sm-6 required"><label for="entry.1979856146" class="required">First Name</label><input class="form-control" type="text" name="entry.1979856146"></div>');
			var a2 = $('<div class="form-group col-sm-6 required"><label for="entry.2036822264" class="required">Last Name</label><input class="form-control" type="text" name="entry.2036822264"></div>');
			var a3 = $('<div class="form-group col-sm-12 required"><label for="entry.914674720" class="required">Email Address</label><input class="form-control" type="email" name="entry.914674720"></div>');

			item.append(title).append(sub).append(exp1.append(list1)).append(exp2.append(list2)).append(a1).append(a2).append(a3);
			list1.append(i1).append(i2).append(i3);
			list2.append(i4).append(i5).append(i6);
			return item;
		},
		endo:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.223694585">Draft a short recommendation for your Endorser to edit and approve for you.</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name="entry.223694585" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sub: function(){
			var item = $('<div class="col-sm-12 col-xs-12 form-group submit-btn"></div>');
      var button = $('<button type="submit" class="btn btn-primary col-sm-2">Submit</button>');
			item.append(button);

			return item;
		}
	};
	candidate.ui.append(candidate.form);
	candidate.form.append(candidate.pageTitle).append(candidate.basicInfo).append(candidate.endorserInfo).append(candidate.endo).append(candidate.sub);


	return candidate;
});
