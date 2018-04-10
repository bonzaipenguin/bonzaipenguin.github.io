define(['jquery'], function($) {

	var endorser = {
		ui:$('<div class="endorser"></div>'),
		reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		form:$('<form action=" " class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application" method="post" onsubmit="submitted=true;" target="hidden_iframe"></form>'),
		pageTitle:$('<h2 class="col-sm-12 col-xs-12 form-title">Endorser Member Application</h2>'),
		basicInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Basic Info</h3>');
			var sub1 = $('<h6 class="sub-title">Endorsing Members must have experience serving on a public, private, or non-profit board</h6>');
			var sub2 = $('<h6 class="sub-title italic">and must meet one of the below criteria:</h6>');
			var qList = $('<ul></ul>');
			var qual1 = $('<li>CEO or C-suite at a company with at least one round of institutional funding</li>');
			var qual2 = $('<li>Seed, VC, or private equity investor, or</li>');
			var qual3 = $('<li>Influencer, thought leader, or domain expert in their industry</li>');
			var a1 = $('<div class="form-group required col-sm-6"><label class="required" for=" ">First Name</label><input class="form-control" type="text" name=" " required></div>');
			var a2 = $('<div class="form-group required col-sm-6"><label class="required" for=" ">Last Name</label><input class="form-control" type="text" name=" " required></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for=" ">LinkedIn Profile</label><input class="form-control" type="text" name=" "></div>');
			var a4 = $('<div class="form-group required col-sm-12"><label class="required" for=" ">Personal Email Address</label><input class="form-control" type="email" name=" " required></div>');
			var a5 = $('<div class="form-group required col-sm-6"><label class="required" for=" ">Current or Most Recent Company</label><input class="form-control" type="text" name=" " required></div>');
			var a6 = $('<div class="form-group required col-sm-6"><label class="required" for=" ">Current or Most Recent Title</label><input class="form-control" type="text" name=" " required></div>');

			item.append(title).append(sub1).append(sub2).append(qList).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6);
			qList.append(qual1).append(qual2).append(qual3);

			return item;
		},
		boardInfo:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var title = $('<h3 class="blue">Your Board Experience</h3>');
			var sub = $('<h5 class="medium required">Click all that apply:</h5>');
			var a1 = $('<div class="form-check col-sm-12"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Public">Public board</label></div>');
			var a2 = $('<div class="form-check col-sm-12"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Private">Private board</label></div>');
			var a3 = $('<div class="form-check col-sm-12"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Non-Profit">Non-Profit Board</label></div>');
			var a4 = $('<div class="form-check col-sm-12"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Advisory">Advisory Board</label></div>');
			var a5 = $('<div class="form-check col-sm-12"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="None">N/A</label></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4).append(a5);

			return item;
		},

// ENDORSMENT FORMS
		basicForm:$('<div class="col-sm-12 col-xs-12"></div>'),
		endoForms:$('<div class="col-sm-12 col-xs-12 endo-forms"></div>'),
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
			var sub = $('<h5 class="sub-title">Please provide your endorsement for up to 10 women you\'d like to recommend for board opportunities.</h5>');

			var exp = $('<h6 class="sub-title italic">We suggest, though it\'s not required, that candidates meet one of the below criteria:</h6>');
			var list = $('<ul></ul>');
			var i1 = $('<li>Influencer, thought leader, or domain expert in her industry</li>');
			var i2 = $('<li>CEO or Founder of a company with at least $5m+ revenue</li>');
			var i3 = $('<li>CEO or C-suite (VP+) at a company with $25m+ annual revenue</li>');
			var i4 = $('<li>Director level and above at a company with $500m+ annual revenue</li>');

			var a1 = $('<div class="form-group required col-sm-6"><label class="required" for=" ">First Name</label><input class="form-control" type="text" name=" " required></div>');
			var a2 = $('<div class="form-group required col-sm-6"><label class="required" for=" ">Last Name</label><input class="form-control" type="text" name=" " required></div>');
			var a3 = $('<div class="form-group required col-sm-12"><label class="required" for=" ">Personal Email Address</label><input class="form-control" type="email" name=" " required></div>');
			var a4 = $('<div class="form-group required col-sm-12"><label class="required" for=" ">Current Company</label><input class="form-control" type="text" name=" " required></div>');

			item.append(title).append(sub).append(exp).append(list).append(a1).append(a2).append(a3).append(a4);
			list.append(i1).append(i2).append(i3).append(i4);

			return item;
		},
		twoInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Second Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for=" ">First Name</label><input class="form-control" type="text" name=" "></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for=" ">Last Name</label><input class="form-control" type="text" name=" "></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for=" ">Personal Email Address</label><input class="form-control" type="email" name=" "></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for=" ">Current Company</label><input class="form-control" type="text" name=" "></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		threeInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Third Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for=" ">First Name</label><input class="form-control" type="text" name=" "></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for=" ">Last Name</label><input class="form-control" type="text" name=" "></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for=" ">Personal Email Address</label><input class="form-control" type="email" name=" "></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for=" ">Current Company</label><input class="form-control" type="text" name=" "></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		fourInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Fourth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for=" ">First Name</label><input class="form-control" type="text" name=" "></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for=" ">Last Name</label><input class="form-control" type="text" name=" "></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for=" ">Personal Email Address</label><input class="form-control" type="email" name=" "></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for=" ">Current Company</label><input class="form-control" type="text" name=" "></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		fiveInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Fifth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for=" ">First Name</label><input class="form-control" type="text" name=" "></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for=" ">Last Name</label><input class="form-control" type="text" name=" "></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for=" ">Personal Email Address</label><input class="form-control" type="email" name=" "></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for=" ">Current Company</label><input class="form-control" type="text" name=" "></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sixInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Sixth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for=" ">First Name</label><input class="form-control" type="text" name=" "></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for=" ">Last Name</label><input class="form-control" type="text" name=" "></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for=" ">Personal Email Address</label><input class="form-control" type="email" name=" "></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for=" ">Current Company</label><input class="form-control" type="text" name=" "></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sevenInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Seventh Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for=" ">First Name</label><input class="form-control" type="text" name=" "></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for=" ">Last Name</label><input class="form-control" type="text" name=" "></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for=" ">Personal Email Address</label><input class="form-control" type="email" name=" "></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for=" ">Current Company</label><input class="form-control" type="text" name=" "></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		eightInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Eighth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for=" ">First Name</label><input class="form-control" type="text" name=" "></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for=" ">Last Name</label><input class="form-control" type="text" name=" "></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for=" ">Personal Email Address</label><input class="form-control" type="email" name=" "></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for=" ">Current Company</label><input class="form-control" type="text" name=" "></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		nineInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Ninth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for=" ">First Name</label><input class="form-control" type="text" name=" "></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for=" ">Last Name</label><input class="form-control" type="text" name=" "></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for=" ">Personal Email Address</label><input class="form-control" type="email" name=" "></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for=" ">Current Company</label><input class="form-control" type="text" name=" "></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		tenInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Tenth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for=" ">First Name</label><input class="form-control" type="text" name=" "></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for=" ">Last Name</label><input class="form-control" type="text" name=" "></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for=" ">Personal Email Address</label><input class="form-control" type="email" name=" "></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for=" ">Current Company</label><input class="form-control" type="text" name=" "></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},

// BOARD INFO
		oneBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium required">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		twoBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		threeBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		fourBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		fiveBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		sixBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		sevenBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		eightBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		nineBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		tenBoard:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for=" "><input class="form-check-input" type="checkbox" name=" " value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},

// ENDORSEMENT TEXT AREA
		oneEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for=" ">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name=" " rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		twoEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for=" ">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name=" " rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		threeEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for=" ">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name=" " rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		fourEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for=" ">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name=" " rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		fiveEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for=" ">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name=" " rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sixEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for=" ">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name=" " rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sevenEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for=" ">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name=" " rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		eightEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for=" ">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name=" " rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		nineEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for=" ">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name=" " rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		tenEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for=" ">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name=" " rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},

// NAV BUTTONS
		add:function(){
			var item = $('<div class="col-sm-12 col-xs-12 form-group info add"s></div>');
			var btn = $('<div class="btn btn-secondary col-sm-12 col-xs-12 next"><i class="material-icons" style="font-size:18px">add</i> <span>Endorse Another</span></div>');
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
	endorser.form.append(endorser.errors).append(endorser.basicForm).append(endorser.endoForms).append(endorser.sub);
	endorser.basicForm.append(endorser.pageTitle).append(endorser.basicInfo).append(endorser.boardInfo);
	endorser.endoForms.append(endorser.first).append(endorser.second).append(endorser.third).append(endorser.fourth).append(endorser.fifth).append(endorser.sixth).append(endorser.seventh).append(endorser.eighth).append(endorser.ninth).append(endorser.tenth).append(endorser.add);
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
