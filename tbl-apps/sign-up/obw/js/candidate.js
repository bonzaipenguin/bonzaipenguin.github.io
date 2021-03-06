define(['jquery'], function($) {

	var candidate = {
		ui:$('<div class="candidate"></div>'),
		// reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		// reFrame:$('<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted)  {window.location="www.theboardlist.com";}"></iframe>'),
		form:$('<form action="https://docs.google.com/forms/d/e/1FAIpQLSfln6L0VeMdU4nPYqg8YJqGgUEkWpGcOUFs8i8nPlNpfXizHw/formResponse" target="hidden_iframe" method="POST" onsubmit="submitted=true;" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application"></form>'),
		pageTitle:$('<h2 class="col-sm-12 form-title">Candidate Application</h2>'),
		basicInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Basic Info</h3>');
			var a1 = $('<div class="form-group col-sm-6 required"><label for="entry.1968671677" class="required">First Name</label><input class="form-control" type="text" name="entry.1968671677" required></div>');
			var a2 = $('<div class="form-group col-sm-6 required"><label for="entry.639517747" class="required">Last Name</label><input class="form-control" type="text" name="entry.639517747" required></div>');
			var a3 = $('<div class="form-group col-sm-6"><label for="entry.495058947">LinkedIn Profile</label><input class="form-control" type="text" name="entry.495058947"></div>');
			var a4 = $('<div class="form-group col-sm-6 required"><label for="entry.821216649" class="required">Your Location</label><input class="form-control" type="text" name="entry.821216649" required></div>');
			var a5 = $('<div class="form-group col-sm-6 required"><label for="entry.923885329" class="required">Current Company</label><input class="form-control" type="text" name="entry.923885329" required></div>');
			var a6 = $('<div class="form-group col-sm-6 required"><label for="entry.1217555557" class="required">Current Title</label><input class="form-control" type="text" name="entry.1217555557" required></div>');
			var a7 = $('<div class="form-group col-sm-12 required"><label for="entry.1856006291" class="required">Personal Email Address</label><input class="form-control" type="email" name="entry.1856006291" required></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6).append(a7);

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
			var i5 = $('<li>A Private Board, or</li>');
			var i6 = $('<li>A Non-Profit Board</li>');

			var a1 = $('<div class="form-group col-sm-6"><label for="entry.598885570">First Name</label><input class="form-control" type="text" name="entry.598885570"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.445354324">Last Name</label><input class="form-control" type="text" name="entry.445354324"></div>');
			var a3 = $('<div class="form-group col-sm-6"><label for="entry.541831603">Email Address</label><input class="form-control" type="email" name="entry.541831603"></div>')
			var a4 = $('<div class="form-group col-sm-6"><label for="entry.1796391635">Location</label><input class="form-control" type="text" name="entry.1796391635"></div>');

			item.append(title).append(sub).append(exp1.append(list1)).append(exp2.append(list2)).append(a1).append(a2).append(a3).append(a4);
			list1.append(i1).append(i2).append(i3);
			list2.append(i4).append(i5).append(i6);
			return item;
		},
		endBoard:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<h5 class="medium">Your Endorser has served on:<span class="click-all">(Click all that apply)</span></h5>');
			var a1 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1494985487"><input class="form-check-input" type="checkbox" name="entry.1494985487" value="Public">Public board</label></div>');
			var a2 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1494985487"><input class="form-check-input" type="checkbox" name="entry.1494985487" value="Private">Private board</label></div>');
			var a3 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1494985487"><input class="form-check-input" type="checkbox" name="entry.1494985487" value="Non-Profit">Non-Profit Board</label></div>');

			item.append(sub).append(a1).append(a2).append(a3);

			return item;
		},
		endo:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1436400401">Draft a short recommendation for your Endorser to edit and approve for you.</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name="entry.1436400401" rows="5"></textarea>');

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
	candidate.form.append(candidate.pageTitle).append(candidate.basicInfo).append(candidate.endorserInfo).append(candidate.endBoard).append(candidate.endo).append(candidate.sub);


	return candidate;
});
