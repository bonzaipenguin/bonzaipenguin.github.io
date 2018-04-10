define(['jquery'], function($) {

	var endorser = {
		ui:$('<div class="endorser"></div>'),
		reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		form:$('<form action="https://docs.google.com/forms/d/e/1FAIpQLSfEB2yHdBRg3RgbwLhoTU6b3uY6coDXBo4ygbZdJ4OTJ51apQ/formResponse" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application" method="post" onsubmit="submitted=true;" target="hidden_iframe"></form>'),
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
			var a1 = $('<div class="form-group required col-sm-6"><label class="required" for="entry.1908240090">First Name</label><input class="form-control" type="text" name="entry.1908240090" required></div>');
			var a2 = $('<div class="form-group required col-sm-6"><label class="required" for="entry.1478266996">Last Name</label><input class="form-control" type="text" name="entry.1478266996" required></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1165168472">LinkedIn Profile</label><input class="form-control" type="text" name="entry.1165168472"></div>');
			var a4 = $('<div class="form-group required col-sm-12"><label class="required" for="entry.353878113">Personal Email Address</label><input class="form-control" type="email" name="entry.353878113" required></div>');
			var a5 = $('<div class="form-group required col-sm-6"><label class="required" for="entry.2091650795">Current or Most Recent Company</label><input class="form-control" type="text" name="entry.2091650795" required></div>');
			var a6 = $('<div class="form-group required col-sm-6"><label class="required" for="entry.577742509">Current or Most Recent Title</label><input class="form-control" type="text" name="entry.577742509" required></div>');

			item.append(title).append(sub1).append(sub2).append(qList).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6);
			qList.append(qual1).append(qual2).append(qual3);

			return item;
		},
		boardInfo:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var title = $('<h3 class="blue">Your Board Experience</h3>');
			var sub = $('<h5 class="medium required">Click all that apply:</h5>');
			var a1 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1377468209"><input class="form-check-input" type="checkbox" name="entry.1377468209" value="Public">Public board</label></div>');
			var a2 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1377468209"><input class="form-check-input" type="checkbox" name="entry.1377468209" value="Private">Private board</label></div>');
			var a3 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1377468209"><input class="form-check-input" type="checkbox" name="entry.1377468209" value="Non-Profit">Non-Profit Board</label></div>');
			var a4 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1377468209"><input class="form-check-input" type="checkbox" name="entry.1377468209" value="Advisory">Advisory Board</label></div>');
			var a5 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1377468209"><input class="form-check-input" type="checkbox" name="entry.1377468209" value="None">N/A</label></div>');

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

			var a1 = $('<div class="form-group required col-sm-6"><label class="required" for="entry.679989210">First Name</label><input class="form-control" type="text" name="entry.679989210" required></div>');
			var a2 = $('<div class="form-group required col-sm-6"><label class="required" for="entry.1507043077">Last Name</label><input class="form-control" type="text" name="entry.1507043077" required></div>');
			var a3 = $('<div class="form-group required col-sm-12"><label class="required" for="entry.928078337">Personal Email Address</label><input class="form-control" type="email" name="entry.928078337" required></div>');
			var a4 = $('<div class="form-group required col-sm-12"><label class="required" for="entry.1778814953">Current Company</label><input class="form-control" type="text" name="entry.1778814953" required></div>');

			item.append(title).append(sub).append(exp).append(list).append(a1).append(a2).append(a3).append(a4);
			list.append(i1).append(i2).append(i3).append(i4);

			return item;
		},
		twoInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Second Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1569981703">First Name</label><input class="form-control" type="text" name="entry.1569981703"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.17794219">Last Name</label><input class="form-control" type="text" name="entry.17794219"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1754694054">Personal Email Address</label><input class="form-control" type="email" name="entry.1754694054"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.621997231">Current Company</label><input class="form-control" type="text" name="entry.621997231"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		threeInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Third Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.543957558">First Name</label><input class="form-control" type="text" name="entry.543957558"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.8102246">Last Name</label><input class="form-control" type="text" name="entry.8102246"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.677834204">Personal Email Address</label><input class="form-control" type="email" name="entry.677834204"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.258057602">Current Company</label><input class="form-control" type="text" name="entry.258057602"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		fourInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Fourth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.203986485">First Name</label><input class="form-control" type="text" name="entry.203986485"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1723282700">Last Name</label><input class="form-control" type="text" name="entry.1723282700"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.384791528">Personal Email Address</label><input class="form-control" type="email" name="entry.384791528"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.753139706">Current Company</label><input class="form-control" type="text" name="entry.753139706"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		fiveInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Fifth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.776872711">First Name</label><input class="form-control" type="text" name="entry.776872711"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.845865876">Last Name</label><input class="form-control" type="text" name="entry.845865876"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1662837379">Personal Email Address</label><input class="form-control" type="email" name="entry.1662837379"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1017531665">Current Company</label><input class="form-control" type="text" name="entry.1017531665"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sixInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Sixth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.474099175">First Name</label><input class="form-control" type="text" name="entry.474099175"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.203017994">Last Name</label><input class="form-control" type="text" name="entry.203017994"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1710999524">Personal Email Address</label><input class="form-control" type="email" name="entry.1710999524"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1182532809">Current Company</label><input class="form-control" type="text" name="entry.1182532809"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sevenInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Seventh Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.245453887">First Name</label><input class="form-control" type="text" name="entry.245453887"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1744669540">Last Name</label><input class="form-control" type="text" name="entry.1744669540"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.768233863">Personal Email Address</label><input class="form-control" type="email" name="entry.768233863"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.2014366157">Current Company</label><input class="form-control" type="text" name="entry.2014366157"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		eightInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Eighth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.773817273">First Name</label><input class="form-control" type="text" name="entry.773817273"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1530866906">Last Name</label><input class="form-control" type="text" name="entry.1530866906"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.670771243">Personal Email Address</label><input class="form-control" type="email" name="entry.670771243"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.769998968">Current Company</label><input class="form-control" type="text" name="entry.769998968"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		nineInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Ninth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.664470228">First Name</label><input class="form-control" type="text" name="entry.664470228"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.604679318">Last Name</label><input class="form-control" type="text" name="entry.604679318"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1109750804">Personal Email Address</label><input class="form-control" type="email" name="entry.1109750804"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.88364823">Current Company</label><input class="form-control" type="text" name="entry.88364823"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		tenInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Tenth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1276654317">First Name</label><input class="form-control" type="text" name="entry.1276654317"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.990732825">Last Name</label><input class="form-control" type="text" name="entry.990732825"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1506806732">Personal Email Address</label><input class="form-control" type="email" name="entry.1506806732"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.275160797">Current Company</label><input class="form-control" type="text" name="entry.275160797"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},

// BOARD INFO
		oneBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium required">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1909664164"><input class="form-check-input" type="checkbox" name="entry.1909664164" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1909664164"><input class="form-check-input" type="checkbox" name="entry.1909664164" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1909664164"><input class="form-check-input" type="checkbox" name="entry.1909664164" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1909664164"><input class="form-check-input" type="checkbox" name="entry.1909664164" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1909664164"><input class="form-check-input" type="checkbox" name="entry.1909664164" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1909664164"><input class="form-check-input" type="checkbox" name="entry.1909664164" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		twoBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.2068463954"><input class="form-check-input" type="checkbox" name="entry.2068463954" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.2068463954"><input class="form-check-input" type="checkbox" name="entry.2068463954" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.2068463954"><input class="form-check-input" type="checkbox" name="entry.2068463954" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.2068463954"><input class="form-check-input" type="checkbox" name="entry.2068463954" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.2068463954"><input class="form-check-input" type="checkbox" name="entry.2068463954" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.2068463954"><input class="form-check-input" type="checkbox" name="entry.2068463954" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		threeBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.708748593"><input class="form-check-input" type="checkbox" name="entry.708748593" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.708748593"><input class="form-check-input" type="checkbox" name="entry.708748593" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.708748593"><input class="form-check-input" type="checkbox" name="entry.708748593" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.708748593"><input class="form-check-input" type="checkbox" name="entry.708748593" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.708748593"><input class="form-check-input" type="checkbox" name="entry.708748593" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.708748593"><input class="form-check-input" type="checkbox" name="entry.708748593" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		fourBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.450775396"><input class="form-check-input" type="checkbox" name="entry.450775396" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.450775396"><input class="form-check-input" type="checkbox" name="entry.450775396" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.450775396"><input class="form-check-input" type="checkbox" name="entry.450775396" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.450775396"><input class="form-check-input" type="checkbox" name="entry.450775396" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.450775396"><input class="form-check-input" type="checkbox" name="entry.450775396" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.450775396"><input class="form-check-input" type="checkbox" name="entry.450775396" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		fiveBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.817730410"><input class="form-check-input" type="checkbox" name="entry.817730410" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.817730410"><input class="form-check-input" type="checkbox" name="entry.817730410" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.817730410"><input class="form-check-input" type="checkbox" name="entry.817730410" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.817730410"><input class="form-check-input" type="checkbox" name="entry.817730410" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.817730410"><input class="form-check-input" type="checkbox" name="entry.817730410" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.817730410"><input class="form-check-input" type="checkbox" name="entry.817730410" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		sixBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.829954655"><input class="form-check-input" type="checkbox" name="entry.829954655" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.829954655"><input class="form-check-input" type="checkbox" name="entry.829954655" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.829954655"><input class="form-check-input" type="checkbox" name="entry.829954655" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.829954655"><input class="form-check-input" type="checkbox" name="entry.829954655" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.829954655"><input class="form-check-input" type="checkbox" name="entry.829954655" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.829954655"><input class="form-check-input" type="checkbox" name="entry.829954655" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		sevenBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.649388658"><input class="form-check-input" type="checkbox" name="entry.649388658" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.649388658"><input class="form-check-input" type="checkbox" name="entry.649388658" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.649388658"><input class="form-check-input" type="checkbox" name="entry.649388658" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.649388658"><input class="form-check-input" type="checkbox" name="entry.649388658" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.649388658"><input class="form-check-input" type="checkbox" name="entry.649388658" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.649388658"><input class="form-check-input" type="checkbox" name="entry.649388658" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		eightBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1697773190"><input class="form-check-input" type="checkbox" name="entry.1697773190" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1697773190"><input class="form-check-input" type="checkbox" name="entry.1697773190" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1697773190"><input class="form-check-input" type="checkbox" name="entry.1697773190" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1697773190"><input class="form-check-input" type="checkbox" name="entry.1697773190" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1697773190"><input class="form-check-input" type="checkbox" name="entry.1697773190" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1697773190"><input class="form-check-input" type="checkbox" name="entry.1697773190" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		nineBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.331983376"><input class="form-check-input" type="checkbox" name="entry.331983376" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.331983376"><input class="form-check-input" type="checkbox" name="entry.331983376" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.331983376"><input class="form-check-input" type="checkbox" name="entry.331983376" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.331983376"><input class="form-check-input" type="checkbox" name="entry.331983376" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.331983376"><input class="form-check-input" type="checkbox" name="entry.331983376" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.331983376"><input class="form-check-input" type="checkbox" name="entry.331983376" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		tenBoard:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.161517494"><input class="form-check-input" type="checkbox" name="entry.161517494" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.161517494"><input class="form-check-input" type="checkbox" name="entry.161517494" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.161517494"><input class="form-check-input" type="checkbox" name="entry.161517494" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.161517494"><input class="form-check-input" type="checkbox" name="entry.161517494" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.161517494"><input class="form-check-input" type="checkbox" name="entry.161517494" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.161517494"><input class="form-check-input" type="checkbox" name="entry.161517494" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},

// ENDORSEMENT TEXT AREA
		oneEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.730398277">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name="entry.730398277" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		twoEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.238661716">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="twoEndorsement" name="entry.238661716" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		threeEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1011110985">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="threeEndorsement" name="entry.1011110985" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		fourEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1869929642">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="fourEndorsement" name="entry.1869929642" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		fiveEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.881996570">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="fiveEndorsement" name="entry.881996570" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sixEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1530378405">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="sixEndorsement" name="entry.1530378405" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sevenEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.220110424">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="sevenEndorsement" name="entry.220110424" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		eightEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.380287470">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="eightEndorsement" name="entry.380287470" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		nineEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1450354834">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="nineEndorsement" name="entry.1450354834" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		tenEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1827223739">What makes this woman great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="tenEndorsement" name="entry.1827223739" rows="5"></textarea>');

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
