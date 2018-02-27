define(['jquery'], function($) {

	var endorser = {
		ui:$('<div class="endorser"></div>'),
		reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		form:$('<form action="https://docs.google.com/forms/d/e/1FAIpQLSfJc-VcNH5xfoti9kehrbMz28TNbVEX32dt8rYp8Q0JiiPjwQ/formResponse" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application" method="post" onsubmit="submitted=true;" target="hidden_iframe"></form>'),
		pageTitle:$('<h2 class="col-sm-12 col-xs-12 form-title">Endorser Member Application</h2>'),
		basicInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Basic Info</h3>');
			var a1 = $('<div class="form-group required col-sm-6"><label for="entry.1668287963">First Name</label><input class="form-control" type="text" name="entry.1668287963" required></div>');
			var a2 = $('<div class="form-group required col-sm-6"><label for="entry.288737038">Last Name</label><input class="form-control" type="text" name="entry.288737038" required></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1937573618">LinkedIn Profile</label><input class="form-control" type="text" name="entry.1937573618"></div>');
			var a4 = $('<div class="form-group required col-sm-12"><label for="entry.740625799">Email Address</label><input class="form-control" type="email" name="entry.740625799" required></div>');
			var a5 = $('<div class="form-group required col-sm-6"><label for="entry.1465896516">Company</label><input class="form-control" type="text" name="entry.1465896516" required></div>');
			var a6 = $('<div class="form-group required col-sm-6"><label for="entry.1983946945">Title</label><input class="form-control" type="text" name="entry.1983946945" required></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6);

			return item;
		},
		boardInfo:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var title = $('<h3 class="blue">Your Board Experience</h3>');
			var sub = $('<h5 class="medium required">Click all that apply:</h5>');
			var a1 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1197986892"><input class="form-check-input" type="checkbox" name="entry.1197986892" value="Public">Public board</label></div>');
			var a2 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1197986892"><input class="form-check-input" type="checkbox" name="entry.1197986892" value="Private">Private board</label></div>');
			var a3 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1197986892"><input class="form-check-input" type="checkbox" name="entry.1197986892" value="Non-Profit">Non-Profit Board</label></div>');
			var a4 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1197986892"><input class="form-check-input" type="checkbox" name="entry.1197986892" value="Advisory">Advisory Board</label></div>');
			var a5 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1197986892"><input class="form-check-input" type="checkbox" name="entry.1197986892" value="None">N/A</label></div>');

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
			var sub = $('<h5 class="sub-title">Please provide your endorsement for up to 10 women you\'d like to recommend for board opportunities.</h5>');

			var exp = $('<h6 class="sub-title italic">We suggest, though it\'s not required, that candidates meet one of the below criteria:</h6>');
			var list = $('<ul></ul>');
			var i1 = $('<li>Influencer, thought leader, or domain expert in her industry</li>');
			var i2 = $('<li>CEO or Founder of a company with at least $5m+ revenue</li>');
			var i3 = $('<li>CEO, C-suite (or VP+) at companies with $25m+ revenue</li>');
			var i4 = $('<li>Directors at companies with $500m+ revenue</li>');

			var a1 = $('<div class="form-group required col-sm-6"><label for="entry.468064091">First Name</label><input class="form-control" type="text" name="entry.468064091" required></div>');
			var a2 = $('<div class="form-group required col-sm-6"><label for="entry.1601237140">Last Name</label><input class="form-control" type="text" name="entry.1601237140" required></div>');
			var a3 = $('<div class="form-group required col-sm-12"><label for="entry.1721804389">Email Address</label><input class="form-control" type="email" name="entry.1721804389" required></div>');
			var a4 = $('<div class="form-group required col-sm-12"><label for="entry.2031553035">Current Company</label><input class="form-control" type="text" name="entry.2031553035" required></div>');

			item.append(title).append(sub).append(exp).append(list).append(a1).append(a2).append(a3).append(a4);
			list.append(i1).append(i2).append(i3).append(i4);

			return item;
		},
		twoInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Second Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1311020026">First Name</label><input class="form-control" type="text" name="entry.1311020026"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.507118155">Last Name</label><input class="form-control" type="text" name="entry.507118155"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.2139992050">Email Address</label><input class="form-control" type="email" name="entry.2139992050"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.656452120">Current Company</label><input class="form-control" type="text" name="entry.656452120"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		threeInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Third Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.382482740">First Name</label><input class="form-control" type="text" name="entry.382482740"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.830892551">Last Name</label><input class="form-control" type="text" name="entry.830892551"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.12029844">Email Address</label><input class="form-control" type="email" name="entry.12029844"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1140864648">Current Company</label><input class="form-control" type="text" name="entry.1140864648"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		fourInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Fourth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1945844507">First Name</label><input class="form-control" type="text" name="entry.1945844507"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.667730152">Last Name</label><input class="form-control" type="text" name="entry.667730152"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1114651925">Email Address</label><input class="form-control" type="email" name="entry.1114651925"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.670991839">Current Company</label><input class="form-control" type="text" name="entry.670991839"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		fiveInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Fifth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1519265417">First Name</label><input class="form-control" type="text" name="entry.1519265417"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1799144936">Last Name</label><input class="form-control" type="text" name="entry.1799144936"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1821642982">Email Address</label><input class="form-control" type="email" name="entry.1821642982"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.229346978">Current Company</label><input class="form-control" type="text" name="entry.229346978"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sixInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Sixth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1086462789">First Name</label><input class="form-control" type="text" name="entry.1086462789"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.603498443">Last Name</label><input class="form-control" type="text" name="entry.603498443"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.756017957">Email Address</label><input class="form-control" type="email" name="entry.756017957"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1778099978">Current Company</label><input class="form-control" type="text" name="entry.1778099978"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sevenInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Seventh Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.936560160">First Name</label><input class="form-control" type="text" name="entry.936560160"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.863076100">Last Name</label><input class="form-control" type="text" name="entry.863076100"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.670358603">Email Address</label><input class="form-control" type="email" name="entry.670358603"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.2125471916">Current Company</label><input class="form-control" type="text" name="entry.2125471916"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		eightInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Eighth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.2030735758">First Name</label><input class="form-control" type="text" name="entry.2030735758"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.815461749">Last Name</label><input class="form-control" type="text" name="entry.815461749"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.2124944128">Email Address</label><input class="form-control" type="email" name="entry.2124944128"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1712658541">Current Company</label><input class="form-control" type="text" name="entry.1712658541"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		nineInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Ninth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1421636307">First Name</label><input class="form-control" type="text" name="entry.1421636307"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1568162574">Last Name</label><input class="form-control" type="text" name="entry.1568162574"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.257888182">Email Address</label><input class="form-control" type="email" name="entry.257888182"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1738875402">Current Company</label><input class="form-control" type="text" name="entry.1738875402"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		tenInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Tenth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1561001108">First Name</label><input class="form-control" type="text" name="entry.1561001108"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.716862066">Last Name</label><input class="form-control" type="text" name="entry.716862066"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1823191119">Email Address</label><input class="form-control" type="email" name="entry.1823191119"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1683636324">Current Company</label><input class="form-control" type="text" name="entry.1683636324"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},

// BOARD INFO
		oneBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium required">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1568663382"><input class="form-check-input" type="checkbox" name="entry.1568663382" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1568663382"><input class="form-check-input" type="checkbox" name="entry.1568663382" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1568663382"><input class="form-check-input" type="checkbox" name="entry.1568663382" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1568663382"><input class="form-check-input" type="checkbox" name="entry.1568663382" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1568663382"><input class="form-check-input" type="checkbox" name="entry.1568663382" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1568663382"><input class="form-check-input" type="checkbox" name="entry.1568663382" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		twoBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1447688028"><input class="form-check-input" type="checkbox" name="entry.1447688028" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1447688028"><input class="form-check-input" type="checkbox" name="entry.1447688028" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1447688028"><input class="form-check-input" type="checkbox" name="entry.1447688028" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1447688028"><input class="form-check-input" type="checkbox" name="entry.1447688028" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1447688028"><input class="form-check-input" type="checkbox" name="entry.1447688028" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1447688028"><input class="form-check-input" type="checkbox" name="entry.1447688028" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		threeBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.158386236"><input class="form-check-input" type="checkbox" name="entry.158386236" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.158386236"><input class="form-check-input" type="checkbox" name="entry.158386236" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.158386236"><input class="form-check-input" type="checkbox" name="entry.158386236" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.158386236"><input class="form-check-input" type="checkbox" name="entry.158386236" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.158386236"><input class="form-check-input" type="checkbox" name="entry.158386236" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.158386236"><input class="form-check-input" type="checkbox" name="entry.158386236" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		fourBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.520720125"><input class="form-check-input" type="checkbox" name="entry.520720125" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.520720125"><input class="form-check-input" type="checkbox" name="entry.520720125" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.520720125"><input class="form-check-input" type="checkbox" name="entry.520720125" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.520720125"><input class="form-check-input" type="checkbox" name="entry.520720125" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.520720125"><input class="form-check-input" type="checkbox" name="entry.520720125" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.520720125"><input class="form-check-input" type="checkbox" name="entry.520720125" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		fiveBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.736908665"><input class="form-check-input" type="checkbox" name="entry.736908665" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.736908665"><input class="form-check-input" type="checkbox" name="entry.736908665" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.736908665"><input class="form-check-input" type="checkbox" name="entry.736908665" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.736908665"><input class="form-check-input" type="checkbox" name="entry.736908665" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.736908665"><input class="form-check-input" type="checkbox" name="entry.736908665" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.736908665"><input class="form-check-input" type="checkbox" name="entry.736908665" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		sixBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1824124128"><input class="form-check-input" type="checkbox" name="entry.1824124128" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1824124128"><input class="form-check-input" type="checkbox" name="entry.1824124128" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1824124128"><input class="form-check-input" type="checkbox" name="entry.1824124128" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1824124128"><input class="form-check-input" type="checkbox" name="entry.1824124128" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1824124128"><input class="form-check-input" type="checkbox" name="entry.1824124128" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1824124128"><input class="form-check-input" type="checkbox" name="entry.1824124128" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		sevenBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.2071122706"><input class="form-check-input" type="checkbox" name="entry.2071122706" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.2071122706"><input class="form-check-input" type="checkbox" name="entry.2071122706" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.2071122706"><input class="form-check-input" type="checkbox" name="entry.2071122706" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.2071122706"><input class="form-check-input" type="checkbox" name="entry.2071122706" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.2071122706"><input class="form-check-input" type="checkbox" name="entry.2071122706" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.2071122706"><input class="form-check-input" type="checkbox" name="entry.2071122706" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		eightBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1650268586"><input class="form-check-input" type="checkbox" name="entry.1650268586" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1650268586"><input class="form-check-input" type="checkbox" name="entry.1650268586" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1650268586"><input class="form-check-input" type="checkbox" name="entry.1650268586" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1650268586"><input class="form-check-input" type="checkbox" name="entry.1650268586" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1650268586"><input class="form-check-input" type="checkbox" name="entry.1650268586" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1650268586"><input class="form-check-input" type="checkbox" name="entry.1650268586" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		nineBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.378284102"><input class="form-check-input" type="checkbox" name="entry.378284102" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.378284102"><input class="form-check-input" type="checkbox" name="entry.378284102" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.378284102"><input class="form-check-input" type="checkbox" name="entry.378284102" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.378284102"><input class="form-check-input" type="checkbox" name="entry.378284102" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.378284102"><input class="form-check-input" type="checkbox" name="entry.378284102" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.378284102"><input class="form-check-input" type="checkbox" name="entry.378284102" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		tenBoard:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.771248317"><input class="form-check-input" type="checkbox" name="entry.771248317" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.771248317"><input class="form-check-input" type="checkbox" name="entry.771248317" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.771248317"><input class="form-check-input" type="checkbox" name="entry.771248317" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.771248317"><input class="form-check-input" type="checkbox" name="entry.771248317" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.771248317"><input class="form-check-input" type="checkbox" name="entry.771248317" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.771248317"><input class="form-check-input" type="checkbox" name="entry.771248317" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},

// ENDORSEMENT TEXT AREA
		oneEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1831206557">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name="entry.1831206557" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		twoEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1954297138">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="twoEndorsement" name="entry.1954297138" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		threeEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1532955126">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="threeEndorsement" name="entry.1532955126" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		fourEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1056193120">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="fourEndorsement" name="entry.1056193120" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		fiveEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1957149706">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="fiveEndorsement" name="entry.1957149706" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sixEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1927172792">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="sixEndorsement" name="entry.1927172792" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sevenEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.310768435">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="sevenEndorsement" name="entry.310768435" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		eightEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1450352879">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="eightEndorsement" name="entry.1450352879" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		nineEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1877692785">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="nineEndorsement" name="entry.1877692785" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		tenEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1171675519">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="tenEndorsement" name="entry.1171675519" rows="5"></textarea>');

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
