define(['jquery'], function($) {

	var candidate = {
		ui:$('<div class="candidate"></div>'),
		// reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		// reFrame:$('<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted)  {window.location="www.theboardlist.com";}"></iframe>'),
		form:$('<form action="" target="hidden_iframe" method="POST" onsubmit="submitted=true;" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application"></form>'),
		pageTitle:$('<h2 class="form-title">Candidate Application</h2>'),
		basicInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Basic Info</h3>');
			var a1 = $('<div class="form-group col-sm-6 required"><label for="" class="required">First Name</label><input class="form-control" type="text" name=""></div>');
			var a2 = $('<div class="form-group col-sm-6 required"><label for="" class="required">Last Name</label><input class="form-control" type="text" name=""></div>');
			var a3 = $('<div class="form-group col-sm-12 required"><label for="" class="required">LinkedIn Profile</label><input class="form-control" type="text" name=""></div>');
			var a4 = $('<div class="form-group col-sm-6 required"><label for="" class="required">Current Company</label><input class="form-control" type="text" name=""></div>');
			var a5 = $('<div class="form-group col-sm-6 required"><label for="" class="required">Title</label><input class="form-control" type="text" name=""></div>');
			var a6 = $('<div class="form-group col-sm-12 required"><label for="" class="required">Personal Email Address</label><input class="form-control" type="text" name=""></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6);

			return item;
		},
		endorserInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Endorser</h3>');
			var sub = $('<h5>Ask someone who meets <span class="medium orange">the criteria for an Endorser Member</span> to join theBoardlist and nominate you.</h5>')
			var a1 = $('<div class="form-group col-sm-6 required"><label for="" class="required">First Name</label><input class="form-control" type="text" name=""></div>');
			var a2 = $('<div class="form-group col-sm-6 required"><label for="" class="required">Last Name</label><input class="form-control" type="text" name=""></div>');
			var a3 = $('<div class="form-group col-sm-12 required"><label for="" class="required">Email Address</label><input class="form-control" type="text" name=""></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3);

			return item;
		},
		endo:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1997399572">What do you want your endorser to say?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name="" rows="5" placeholder="What makes this person great for boards?"></textarea>');

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
	candidate.form.append(candidate.pageTitle).append(candidate.basicInfo).append(candidate.boardInfo).append(candidate.endorserInfo).append(candidate.endo).append(candidate.sub);


	return candidate;
});
