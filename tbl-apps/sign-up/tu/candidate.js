define(['jquery'], function($) {

	var candidate = {
		ui:$('<div class="candidate"></div>'),
		// reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		// reFrame:$('<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted)  {window.location="www.theboardlist.com";}"></iframe>'),
		form:$('<form action="https://docs.google.com/forms/d/e/1FAIpQLSfHnw9OIxaqme7iAJDGSkiI6APY3Fqzal8bdJj1358sglYiTQ/formResponse" target="hidden_iframe" method="POST" onsubmit="submitted=true;" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application"></form>'),
		pageTitle:$('<h2 class="col-sm-12 form-title">Candidate Application</h2>'),
		basicInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Basic Info</h3>');
			var a1 = $('<div class="form-group col-sm-6 required"><label for="entry.1464340613" class="required">First Name</label><input class="form-control" type="text" name="entry.1464340613"></div>');
			var a2 = $('<div class="form-group col-sm-6 required"><label for="entry.110915259" class="required">Last Name</label><input class="form-control" type="text" name="entry.110915259"></div>');
			var a3 = $('<div class="form-group col-sm-12 required"><label for="entry.2017661338" class="required">LinkedIn Profile</label><input class="form-control" type="text" name="entry.2017661338"></div>');
			var a4 = $('<div class="form-group col-sm-6 required"><label for="entry.629142108" class="required">Current Company</label><input class="form-control" type="text" name="entry.629142108"></div>');
			var a5 = $('<div class="form-group col-sm-6 required"><label for="entry.578706366" class="required">Title</label><input class="form-control" type="text" name="entry.578706366"></div>');
			var a6 = $('<div class="form-group col-sm-12 required"><label for="entry.1062374156" class="required">Personal Email Address</label><input class="form-control" type="email" name="entry.1062374156"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6);

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
			var a1 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.433106096"><input class="form-check-input" type="checkbox" name="entry.433106096" value="Non-Profit">Non-Profit board</label></div>');
			var a2 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.433106096"><input class="form-check-input" type="checkbox" name="entry.433106096" value="Advisory">Advisory board</label></div>');
			var a3 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.433106096"><input class="form-check-input" type="checkbox" name="entry.433106096" value="Public">Public board</label></div>');
			var a4 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.433106096"><input class="form-check-input" type="checkbox" name="entry.433106096" value="Private">Private board</label></div>');

			item.append(title).append(sub).append(qualList).append(cta).append(a1).append(a2).append(a3).append(a4);
			qualList.append(qual1).append(qual2).append(qual3).append(qual4);

			return item;
		},
		endorserInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Endorser</h3>');
			var sub = $('<h5>Ask someone who meets <span class="medium orange">the criteria for an Endorser Member</span> to join theBoardlist and nominate you.</h5>')
			var a1 = $('<div class="form-group col-sm-6 required"><label for="entry.602833739" class="required">First Name</label><input class="form-control" type="text" name="entry.602833739"></div>');
			var a2 = $('<div class="form-group col-sm-6 required"><label for="entry.737249511" class="required">Last Name</label><input class="form-control" type="text" name="entry.737249511"></div>');
			var a3 = $('<div class="form-group col-sm-12 required"><label for="entry.1021149774" class="required">Email Address</label><input class="form-control" type="text" name="entry.1021149774"></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3);

			return item;
		},
		endo:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1997399572">What do you want your endorser to say?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name="entry.1707664463" rows="5" placeholder="What makes this person great for boards?"></textarea>');

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
