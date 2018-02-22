define(['jquery'], function($) {

	var endorser = {
		ui:$('<div class="endorser"></div>'),
		reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		// reFrame:$("<iframe id="hidden_iframe" name="hidden_iframe" onload="if(submitted) { window.location='https://theboardlist.com/confirmation-e';}" style="display:none;"></iframe>"></iframe>"),
		form:$('<form action="https://docs.google.com/forms/d/e/1FAIpQLScv5k2s6veBo_4e0hwTey20eoRbb5kGqt9_9ehgrTfbwEcsLA/formResponse" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application" method="post" onsubmit="submitted=true;" target="hidden_iframe"></form>'),
		pageTitle:$('<h2 class="col-sm-12 col-xs-12 form-title">Endorser Member Application</h2>'),
		errors:$('<ul class="col-sm-12 errors"></ul>'),
		basicInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Basic Info</h3>');
			var a1 = $('<div class="form-group required col-sm-6"><label for="entry.1444860387">First Name</label><input class="form-control" type="text" name="entry.1444860387" required></div>');
			var a2 = $('<div class="form-group required col-sm-6"><label for="entry.1193202149">Last Name</label><input class="form-control" type="text" name="entry.1193202149" required></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.530948091">LinkedIn Profile (optional)</label><input class="form-control" type="text" name="entry.530948091"></div>');
			var a4 = $('<div class="form-group required col-sm-12"><label for="entry.1503699276">Email Address</label><input class="form-control" type="email" name="entry.1503699276" required></div>');
			var a5 = $('<div class="form-group required col-sm-6"><label for="entry.708915277">Company</label><input class="form-control" type="text" name="entry.708915277" required></div>');
			var a6 = $('<div class="form-group required col-sm-6"><label for="entry.1611185213">Title</label><input class="form-control" type="text" name="entry.1611185213" required></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6);

			return item;
		},
		boardInfo:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var title = $('<h3 class="blue">Your Board Experience</h3>');
			var sub = $('<h5 class="medium required">Click all that apply:</h5>');
			var a1 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1035927514"><input class="form-check-input" type="checkbox" required name="entry.1035927514" value="Non-Profit">Non-Profit board</label></div>');
			var a2 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1035927514"><input class="form-check-input" type="checkbox" required name="entry.1035927514" value="Public">Public board</label></div>');
			var a3 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1035927514"><input class="form-check-input" type="checkbox" required name="entry.1035927514" value="Private">Private board</label></div>');
			var a4 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1035927514"><input class="form-check-input" type="checkbox" required name="entry.1035927514" value="Advisory">Advisory board</label></div>');
			var a5 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1035927514"><input class="form-check-input" type="checkbox" required name="entry.1035927514" value="None">N/A</label></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4).append(a5);

			return item;
		},

// ENDORSMENT FORMS
		leftSide:$('<div class="col-sm-12 col-xs-12"></div>'),
		rightSide:$('<div class="col-sm-12 col-xs-12 endo-forms"></div>'),
		first:$('<div class="col-sm-12 multi-form first opened"></div>'),
		second:$('<div class="col-sm-12 multi-form second hidden"></div>'),
		third:$('<div class="col-sm-12 multi-form third hidden"></div>'),
		fourth:$('<div class="col-sm-12 multi-form fourth hidden"></div>'),
		fifth:$('<div class="col-sm-12 multi-form fifth hidden"></div>'),
		sixth:$('<div class="col-sm-12 multi-form sixth hidden"></div>'),
		seventh:$('<div class="col-sm-12 multi-form seventh hidden"></div>'),
		eighth:$('<div class="col-sm-12 multi-form eighth hidden"></div>'),
		ninth:$('<div class="col-sm-12 multi-form ninth hidden"></div>'),
		tenth:$('<div class="col-sm-12 multi-form tenth hidden"></div>'),

// BASIC INFO
		oneInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Candidate</h3>');
			var sub = $('<h5 class="sub-title">Please provide your endorsement for up to 10 women you\'d like to recommend for board&nbspopportunities.</h5>');
			var a1 = $('<div class="form-group required col-sm-6"><label for="entry.789056543">First Name</label><input class="form-control" type="text" name="entry.789056543" required></div>');
			var a2 = $('<div class="form-group required col-sm-6"><label for="entry.2013160361">Last Name</label><input class="form-control" type="text" name="entry.2013160361" required></div>');
			var a3 = $('<div class="form-group required col-sm-12"><label for="entry.1838536806">Email Address</label><input class="form-control" type="email" name="entry.1838536806" required></div>');
			var a4 = $('<div class="form-group required col-sm-12"><label for="entry.1099747370">Current Company</label><input class="form-control" type="text" name="entry.1099747370" required></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		twoInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Second Candidate</h3>');
			var sub = $('<h5 class="sub-title">Please provide your endorsement for up to 10 women you\'d like to recommend for board&nbspopportunities.</h5>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1740424515">First Name</label><input class="form-control" type="text" name="entry.1740424515"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1862008726">Last Name</label><input class="form-control" type="text" name="entry.1862008726"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.784535943">Email Address</label><input class="form-control" type="email" name="entry.784535943"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.456379967">Current Company</label><input class="form-control" type="text" name="entry.456379967"></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		threeInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Third Candidate</h3>');
			var sub = $('<h5 class="sub-title">Please provide your endorsement for up to 10 women you\'d like to recommend for board&nbspopportunities.</h5>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1610914362">First Name</label><input class="form-control" type="text" name="entry.1610914362"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1707299396">Last Name</label><input class="form-control" type="text" name="entry.1707299396"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.965207868">Email Address</label><input class="form-control" type="email" name="entry.965207868"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.446102111">Current Company</label><input class="form-control" type="text" name="entry.446102111"></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		fourInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Fourth Candidate</h3>');
			var sub = $('<h5 class="sub-title">Please provide your endorsement for up to 10 women you\'d like to recommend for board&nbspopportunities.</h5>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.716610191">First Name</label><input class="form-control" type="text" name="entry.716610191"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.646865542">Last Name</label><input class="form-control" type="text" name="entry.646865542"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.2140338375">Email Address</label><input class="form-control" type="email" name="entry.2140338375"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.629353330">Current Company</label><input class="form-control" type="text" name="entry.629353330"></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		fiveInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Fifth Candidate</h3>');
			var sub = $('<h5 class="sub-title">Please provide your endorsement for up to 10 women you\'d like to recommend for board&nbspopportunities.</h5>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.834184422">First Name</label><input class="form-control" type="text" name="entry.834184422"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.332656623">Last Name</label><input class="form-control" type="text" name="entry.332656623"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.50036997">Email Address</label><input class="form-control" type="email" name="entry.50036997"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.472848409">Current Company</label><input class="form-control" type="text" name="entry.472848409"></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sixInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Sixth Candidate</h3>');
			var sub = $('<h5 class="sub-title">Please provide your endorsement for up to 10 women you\'d like to recommend for board&nbspopportunities.</h5>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.868551077">First Name</label><input class="form-control" type="text" name="entry.868551077"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="name="entry.1234081883">Last Name</label><input class="form-control" type="text" name="entry.1234081883"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.152941646">Email Address</label><input class="form-control" type="email" name="entry.152941646"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1068922633">Current Company</label><input class="form-control" type="text" name="entry.1068922633"></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sevenInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Seventh Candidate</h3>');
			var sub = $('<h5 class="sub-title">Please provide your endorsement for up to 10 women you\'d like to recommend for board&nbspopportunities.</h5>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.904844593">First Name</label><input class="form-control" type="text" name="entry.904844593"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.822931657">Last Name</label><input class="form-control" type="text" name="entry.822931657"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1651013818">Email Address</label><input class="form-control" type="email" name="entry.1651013818"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.294496047">Current Company</label><input class="form-control" type="text" name="entry.294496047"></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		eightInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Eighth Candidate</h3>');
			var sub = $('<h5 class="sub-title">Please provide your endorsement for up to 10 women you\'d like to recommend for board&nbspopportunities.</h5>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.266805816">First Name</label><input class="form-control" type="text" name="entry.266805816"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1705112352">Last Name</label><input class="form-control" type="text" name="entry.1705112352"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.179732037">Email Address</label><input class="form-control" type="email" name="entry.179732037"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.391742291">Current Company</label><input class="form-control" type="text" name="entry.391742291"></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		nineInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Ninth Candidate</h3>');
			var sub = $('<h5 class="sub-title">Please provide your endorsement for up to 10 women you\'d like to recommend for board&nbspopportunities.</h5>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1067386614">First Name</label><input class="form-control" type="text" name="entry.1067386614"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1691561196">Last Name</label><input class="form-control" type="text" name="entry.1691561196"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.113841919">Email Address</label><input class="form-control" type="email" name="entry.113841919"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.458006580">Current Company</label><input class="form-control" type="text" name="entry.458006580"></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		tenInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Tenth Candidate</h3>');
			var sub = $('<h5 class="sub-title">Please provide your endorsement for up to 10 women you\'d like to recommend for board&nbspopportunities.</h5>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1745329881">First Name</label><input class="form-control" type="text" name="entry.1745329881"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.273887771">Last Name</label><input class="form-control" type="text" name="entry.273887771"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.114658109">Email Address</label><input class="form-control" type="email" name="entry.114658109"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.635955104">Current Company</label><input class="form-control" type="text" name="entry.635955104"></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4);

			return item;
		},

// BOARD INFO
		oneBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium required">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.88397321"><input class="form-check-input" type="checkbox" required name="entry.88397321" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.88397321"><input class="form-check-input" type="checkbox" required name="entry.88397321" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.88397321"><input class="form-check-input" type="checkbox" required name="entry.88397321" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.88397321"><input class="form-check-input" type="checkbox" required name="entry.88397321" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.88397321"><input class="form-check-input" type="checkbox" required name="entry.88397321" value="Advisory">Advisory board</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.88397321"><input class="form-check-input" type="checkbox" required name="entry.88397321" value="Non-Profit">Non-Profit board</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		twoBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.103764983"><input class="form-check-input" type="checkbox" required name="entry.103764983" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.103764983"><input class="form-check-input" type="checkbox" required name="entry.103764983" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.103764983"><input class="form-check-input" type="checkbox" required name="entry.103764983" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.103764983"><input class="form-check-input" type="checkbox" required name="entry.103764983" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.103764983"><input class="form-check-input" type="checkbox" required name="entry.103764983" value="Advisory">Advisory board</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.103764983"><input class="form-check-input" type="checkbox" required name="entry.103764983" value="Non-Profit">Non-Profit board</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		threeBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1264659533"><input class="form-check-input" type="checkbox" required name="entry.1264659533" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1264659533"><input class="form-check-input" type="checkbox" required name="entry.1264659533" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1264659533"><input class="form-check-input" type="checkbox" required name="entry.1264659533" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1264659533"><input class="form-check-input" type="checkbox" required name="entry.1264659533" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1264659533"><input class="form-check-input" type="checkbox" required name="entry.1264659533" value="Advisory">Advisory board</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1264659533"><input class="form-check-input" type="checkbox" required name="entry.1264659533" value="Non-Profit">Non-Profit board</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		fourBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1480204532"><input class="form-check-input" type="checkbox" required name="entry.1480204532" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1480204532"><input class="form-check-input" type="checkbox" required name="entry.1480204532" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1480204532"><input class="form-check-input" type="checkbox" required name="entry.1480204532" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1480204532"><input class="form-check-input" type="checkbox" required name="entry.1480204532" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1480204532"><input class="form-check-input" type="checkbox" required name="entry.1480204532" value="Advisory">Advisory board</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1480204532"><input class="form-check-input" type="checkbox" required name="entry.1480204532" value="Non-Profit">Non-Profit board</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		fiveBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.292556"><input class="form-check-input" type="checkbox" required name="entry.292556" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.292556"><input class="form-check-input" type="checkbox" required name="entry.292556" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.292556"><input class="form-check-input" type="checkbox" required name="entry.292556" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.292556"><input class="form-check-input" type="checkbox" required name="entry.292556" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.292556"><input class="form-check-input" type="checkbox" required name="entry.292556" value="Advisory">Advisory board</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.292556"><input class="form-check-input" type="checkbox" required name="entry.292556" value="Non-Profit">Non-Profit board</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		sixBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1178645511"><input class="form-check-input" type="checkbox" required name="entry.1178645511" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1178645511"><input class="form-check-input" type="checkbox" required name="entry.1178645511" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1178645511"><input class="form-check-input" type="checkbox" required name="entry.1178645511" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1178645511"><input class="form-check-input" type="checkbox" required name="entry.1178645511" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1178645511"><input class="form-check-input" type="checkbox" required name="entry.1178645511" value="Advisory">Advisory board</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1178645511"><input class="form-check-input" type="checkbox" required name="entry.1178645511" value="Non-Profit">Non-Profit board</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		sevenBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.849763989"><input class="form-check-input" type="checkbox" required name="entry.849763989" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.849763989"><input class="form-check-input" type="checkbox" required name="entry.849763989" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.849763989"><input class="form-check-input" type="checkbox" required name="entry.849763989" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.849763989"><input class="form-check-input" type="checkbox" required name="entry.849763989" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.849763989"><input class="form-check-input" type="checkbox" required name="entry.849763989" value="Advisory">Advisory board</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.849763989"><input class="form-check-input" type="checkbox" required name="entry.849763989" value="Non-Profit">Non-Profit board</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		eightBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1695034741"><input class="form-check-input" type="checkbox" required name="entry.1695034741" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1695034741"><input class="form-check-input" type="checkbox" required name="entry.1695034741" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1695034741"><input class="form-check-input" type="checkbox" required name="entry.1695034741" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1695034741"><input class="form-check-input" type="checkbox" required name="entry.1695034741" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1695034741"><input class="form-check-input" type="checkbox" required name="entry.1695034741" value="Advisory">Advisory board</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1695034741"><input class="form-check-input" type="checkbox" required name="entry.1695034741" value="Non-Profit">Non-Profit board</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		nineBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.539688820"><input class="form-check-input" type="checkbox" required name="entry.539688820" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.539688820"><input class="form-check-input" type="checkbox" required name="entry.539688820" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.539688820"><input class="form-check-input" type="checkbox" required name="entry.539688820" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.539688820"><input class="form-check-input" type="checkbox" required name="entry.539688820" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.539688820"><input class="form-check-input" type="checkbox" required name="entry.539688820" value="Advisory">Advisory board</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.539688820"><input class="form-check-input" type="checkbox" required name="entry.539688820" value="Non-Profit">Non-Profit board</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		tenBoard:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.700400513"><input class="form-check-input" type="checkbox" required name="entry.700400513" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.700400513"><input class="form-check-input" type="checkbox" required name="entry.700400513" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.700400513"><input class="form-check-input" type="checkbox" required name="entry.700400513" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.700400513"><input class="form-check-input" type="checkbox" required name="entry.700400513" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.700400513"><input class="form-check-input" type="checkbox" required name="entry.700400513" value="Advisory">Advisory board</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.700400513"><input class="form-check-input" type="checkbox" required name="entry.700400513" value="Non-Profit">Non-Profit board</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},

// ENDORSEMENT TEXT AREA
		oneEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1997399572">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name="entry.1997399572" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		twoEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1940622253">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="twoEndorsement" name="entry.1940622253" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		threeEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.623549155">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="threeEndorsement" name="entry.623549155" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		fourEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1620950541">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="fourEndorsement" name="entry.1620950541" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		fiveEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.776525203">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="fiveEndorsement" name="entry.776525203" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sixEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.311842730">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="sixEndorsement" name="entry.311842730" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sevenEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.273933487">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="sevenEndorsement" name="entry.273933487" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		eightEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.465807934">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="eightEndorsement" name="entry.465807934" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		nineEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1445467220">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="nineEndorsement" name="entry.1445467220" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		tenEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.394669954">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="tenEndorsement" name="entry.394669954" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},

// NAV BUTTONS
		add:function(){
			var item = $('<div class="col-sm-12 col-xs-12 form-group info add"s></div>');
			var btn = $('<div class="btn btn-secondary col-sm-12 next"><i class="material-icons" style="font-size:18px">add</i> <span>Endorse Another</span></div>');
			item.append(btn);
			btn.on('click',function(){
				if ($('.opened').hasClass('ninth')) {
					$('.multi-form .opened');
					$('.opened').next('.multi-form').removeClass('hidden').addClass('opened');
					btn.addClass('hidden');
				} else if($('.opened').hasClass('first')){
					$('.first').css({'padding-bottom':'56px'});
					$('.opened').next('.multi-form').removeClass('hidden').addClass('opened');
				}else {;
					$('.opened').next('.multi-form').removeClass('hidden').addClass('opened');
				}
			});
			return item;
		},
		sub: function(){
			var item = $('<div class="col-sm-12 col-xs-12 form-group submit-btn"></div>');
      var button = $('<button type="submit" class="btn btn-primary col-sm-2">Submit</button>');
			item.append(button);

			return item;
		}
	};
	endorser.ui.append(endorser.form);
	endorser.form.append(endorser.pageTitle).append(endorser.errors).append(endorser.leftSide).append(endorser.rightSide).append(endorser.sub);
	endorser.leftSide.append(endorser.basicInfo).append(endorser.boardInfo);
	endorser.rightSide.append(endorser.first).append(endorser.second).append(endorser.third).append(endorser.fourth).append(endorser.fifth).append(endorser.sixth).append(endorser.seventh).append(endorser.eighth).append(endorser.ninth).append(endorser.tenth).append(endorser.add);
	endorser.first.append(endorser.oneInfo).append(endorser.oneBoard).append(endorser.oneEnd);
	endorser.second.append(endorser.twoInfo).append(endorser.twoBoard).append(endorser.twoEnd);
	endorser.third.append(endorser.threeInfo).append(endorser.threeBoard).append(endorser.threeEnd);
	endorser.fourth.append(endorser.fourInfo).append(endorser.fourBoard).append(endorser.fourEnd);
	endorser.fifth.append(endorser.fiveInfo).append(endorser.fiveBoard).append(endorser.fiveEnd);
	endorser.sixth.append(endorser.sixInfo).append(endorser.sixBoard).append(endorser.sixEnd);
	endorser.seventh.append(endorser.sevenInfo).append(endorser.sevenBoard).append(endorser.sevenEnd);
	endorser.eighth.append(endorser.eightInfo).append(endorser.eightBoard).append(endorser.eightEnd);
	endorser.ninth.append(endorser.nineInfo).append(endorser.nineBoard).append(endorser.nineEnd);
	endorser.tenth.append(endorser.tenInfo).append(endorser.tenBoard).append(endorser.tenEnd);

	return endorser;
});
