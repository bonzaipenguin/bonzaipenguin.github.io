define(['jquery'], function($) {

	var endorser = {
		ui:$('<div></div>'),
		reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		form:$('<form action="https://docs.google.com/forms/d/e/1FAIpQLScP1tMvGsQ4NAPW8ssVgn2moDyUjMw2Z8XUpCz1dvOcKBX72g/formResponse" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application" method="post" onsubmit="submitted=true;" target="hidden_iframe"></form>'),
		pageTitle:$('<h2 class="col-sm-12 col-xs-12 form-title">Endorser Member Application</h2>'),
		basicInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Basic Info</h3>');
			var a1 = $('<div class="form-group required col-sm-6"><label for="entry.576366919">First Name</label><input class="form-control" type="text" name="entry.576366919" required></div>');
			var a2 = $('<div class="form-group required col-sm-6"><label for="entry.907067951">Last Name</label><input class="form-control" type="text" name="entry.907067951" required></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.120915006">LinkedIn Profile (optional)</label><input class="form-control" type="text" name="entry.120915006"></div>');
			var a4 = $('<div class="form-group required col-sm-12"><label for="entry.427506028">Email Address</label><input class="form-control" type="email" name="entry.427506028" required></div>');
			var a5 = $('<div class="form-group required col-sm-6"><label for="entry.87509619">Company</label><input class="form-control" type="text" name="entry.87509619" required></div>');
			var a6 = $('<div class="form-group required col-sm-6"><label for="entry.797672328">Title</label><input class="form-control" type="text" name="entry.797672328" required></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6);

			return item;
		},
		boardInfo:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var title = $('<h3 class="blue">Your Board Experience</h3>');
			var sub = $('<h5 class="medium required">Click all that apply:</h5>');
			var a1 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1416554103"><input class="form-check-input" type="checkbox" name="entry.1416554103" value="Non-Profit">Non Profit</label></div>');
			var a2 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1416554103"><input class="form-check-input" type="checkbox" name="entry.1416554103" value="Public">Public board</label></div>');
			var a3 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1416554103"><input class="form-check-input" type="checkbox" name="entry.1416554103" value="Private">Private board</label></div>');
			var a4 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1416554103"><input class="form-check-input" type="checkbox" name="entry.1416554103" value="Advisory">Advisory</label></div>');
			var a5 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1416554103"><input class="form-check-input" type="checkbox" name="entry.1416554103" value="None">N/A</label></div>');

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
			var a1 = $('<div class="form-group required col-sm-6"><label for="entry.140727582">First Name</label><input class="form-control" type="text" name="entry.140727582" required></div>');
			var a2 = $('<div class="form-group required col-sm-6"><label for="entry.82323176">Last Name</label><input class="form-control" type="text" name="entry.82323176" required></div>');
			var a3 = $('<div class="form-group required col-sm-12"><label for="entry.902706047">Email Address</label><input class="form-control" type="email" name="entry.902706047" required></div>');
			var a4 = $('<div class="form-group required col-sm-12"><label for="entry.153462404">Current Company</label><input class="form-control" type="text" name="entry.153462404" required></div>');

			item.append(title).append(sub).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		twoInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Second Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.116927700">First Name</label><input class="form-control" type="text" name="entry.116927700"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1547794469">Last Name</label><input class="form-control" type="text" name="entry.1547794469"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.2066277679">Email Address</label><input class="form-control" type="email" name="entry.2066277679"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.520296939">Current Company</label><input class="form-control" type="text" name="entry.520296939"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		threeInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Third Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1477375109">First Name</label><input class="form-control" type="text" name="entry.1477375109"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1939678644">Last Name</label><input class="form-control" type="text" name="entry.1939678644"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.2021559223">Email Address</label><input class="form-control" type="email" name="entry.2021559223"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1059746159">Current Company</label><input class="form-control" type="text" name="entry.1059746159"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		fourInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Fourth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.894328114">First Name</label><input class="form-control" type="text" name="entry.894328114"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1597179442">Last Name</label><input class="form-control" type="text" name="entry.1597179442"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.448978761">Email Address</label><input class="form-control" type="email" name="entry.448978761"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1663459659">Current Company</label><input class="form-control" type="text" name="entry.1663459659"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		fiveInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Fifth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.2057952237">First Name</label><input class="form-control" type="text" name="entry.2057952237"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.590429203">Last Name</label><input class="form-control" type="text" name="entry.590429203"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.887190191">Email Address</label><input class="form-control" type="email" name="entry.887190191"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.84914397">Current Company</label><input class="form-control" type="text" name="entry.84914397"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sixInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Sixth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1386042850">First Name</label><input class="form-control" type="text" name="entry.1386042850"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.281423213">Last Name</label><input class="form-control" type="text" name="entry.281423213"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1549516790">Email Address</label><input class="form-control" type="email" name="entry.1549516790"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.13578738">Current Company</label><input class="form-control" type="text" name="entry.13578738"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sevenInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Seventh Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.801596978">First Name</label><input class="form-control" type="text" name="entry.801596978"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1607827100">Last Name</label><input class="form-control" type="text" name="entry.1607827100"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1882519368">Email Address</label><input class="form-control" type="email" name="entry.1882519368"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.565336528">Current Company</label><input class="form-control" type="text" name="entry.565336528"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		eightInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Eighth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.42689013">First Name</label><input class="form-control" type="text" name="entry.42689013"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.2094589984">Last Name</label><input class="form-control" type="text" name="entry.2094589984"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.751484019">Email Address</label><input class="form-control" type="email" name="entry.751484019"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.2058643989">Current Company</label><input class="form-control" type="text" name="entry.2058643989"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		nineInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Ninth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1900991051">First Name</label><input class="form-control" type="text" name="entry.1900991051"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.231956218">Last Name</label><input class="form-control" type="text" name="entry.231956218"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1769469390">Email Address</label><input class="form-control" type="email" name="entry.1769469390"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1523029374">Current Company</label><input class="form-control" type="text" name="entry.1523029374"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		tenInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Tenth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.2006572917">First Name</label><input class="form-control" type="text" name="entry.2006572917"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.173357435">Last Name</label><input class="form-control" type="text" name="entry.173357435"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.789071800">Email Address</label><input class="form-control" type="email" name="entry.789071800"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1934346936">Current Company</label><input class="form-control" type="text" name="entry.1934346936"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},

// BOARD INFO
		oneBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium required">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.68860985"><input class="form-check-input" type="checkbox" name="entry.68860985" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.68860985"><input class="form-check-input" type="checkbox" name="entry.68860985" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.68860985"><input class="form-check-input" type="checkbox" name="entry.68860985" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.68860985"><input class="form-check-input" type="checkbox" name="entry.68860985" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.68860985"><input class="form-check-input" type="checkbox" name="entry.68860985" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.68860985"><input class="form-check-input" type="checkbox" name="entry.68860985" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		twoBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.85797477"><input class="form-check-input" type="checkbox" name="entry.85797477" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.85797477"><input class="form-check-input" type="checkbox" name="entry.85797477" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.85797477"><input class="form-check-input" type="checkbox" name="entry.85797477" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.85797477"><input class="form-check-input" type="checkbox" name="entry.85797477" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.85797477"><input class="form-check-input" type="checkbox" name="entry.85797477" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.85797477"><input class="form-check-input" type="checkbox" name="entry.85797477" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		threeBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.483914257"><input class="form-check-input" type="checkbox" name="entry.483914257" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.483914257"><input class="form-check-input" type="checkbox" name="entry.483914257" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.483914257"><input class="form-check-input" type="checkbox" name="entry.483914257" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.483914257"><input class="form-check-input" type="checkbox" name="entry.483914257" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.483914257"><input class="form-check-input" type="checkbox" name="entry.483914257" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.483914257"><input class="form-check-input" type="checkbox" name="entry.483914257" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		fourBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.576845864"><input class="form-check-input" type="checkbox" name="entry.576845864" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.576845864"><input class="form-check-input" type="checkbox" name="entry.576845864" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.576845864"><input class="form-check-input" type="checkbox" name="entry.576845864" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.576845864"><input class="form-check-input" type="checkbox" name="entry.576845864" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.576845864"><input class="form-check-input" type="checkbox" name="entry.576845864" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.576845864"><input class="form-check-input" type="checkbox" name="entry.576845864" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		fiveBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.314739941"><input class="form-check-input" type="checkbox" name="entry.314739941" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.314739941"><input class="form-check-input" type="checkbox" name="entry.314739941" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.314739941"><input class="form-check-input" type="checkbox" name="entry.314739941" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.314739941"><input class="form-check-input" type="checkbox" name="entry.314739941" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.314739941"><input class="form-check-input" type="checkbox" name="entry.314739941" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.314739941"><input class="form-check-input" type="checkbox" name="entry.314739941" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		sixBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.785362257"><input class="form-check-input" type="checkbox" name="entry.785362257" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.785362257"><input class="form-check-input" type="checkbox" name="entry.785362257" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.785362257"><input class="form-check-input" type="checkbox" name="entry.785362257" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.785362257"><input class="form-check-input" type="checkbox" name="entry.785362257" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.785362257"><input class="form-check-input" type="checkbox" name="entry.785362257" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.785362257"><input class="form-check-input" type="checkbox" name="entry.785362257" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		sevenBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.166516449"><input class="form-check-input" type="checkbox" name="entry.166516449" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.166516449"><input class="form-check-input" type="checkbox" name="entry.166516449" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.166516449"><input class="form-check-input" type="checkbox" name="entry.166516449" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.166516449"><input class="form-check-input" type="checkbox" name="entry.166516449" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.166516449"><input class="form-check-input" type="checkbox" name="entry.166516449" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.166516449"><input class="form-check-input" type="checkbox" name="entry.166516449" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		eightBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.546835833"><input class="form-check-input" type="checkbox" name="entry.546835833" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.546835833"><input class="form-check-input" type="checkbox" name="entry.546835833" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.546835833"><input class="form-check-input" type="checkbox" name="entry.546835833" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.546835833"><input class="form-check-input" type="checkbox" name="entry.546835833" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.546835833"><input class="form-check-input" type="checkbox" name="entry.546835833" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.546835833"><input class="form-check-input" type="checkbox" name="entry.546835833" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		nineBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1608032742"><input class="form-check-input" type="checkbox" name="entry.1608032742" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1608032742"><input class="form-check-input" type="checkbox" name="entry.1608032742" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1608032742"><input class="form-check-input" type="checkbox" name="entry.1608032742" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1608032742"><input class="form-check-input" type="checkbox" name="entry.1608032742" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1608032742"><input class="form-check-input" type="checkbox" name="entry.1608032742" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1608032742"><input class="form-check-input" type="checkbox" name="entry.1608032742" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		tenBoard:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.153677545"><input class="form-check-input" type="checkbox" name="entry.153677545" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.153677545"><input class="form-check-input" type="checkbox" name="entry.153677545" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.153677545"><input class="form-check-input" type="checkbox" name="entry.153677545" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.153677545"><input class="form-check-input" type="checkbox" name="entry.153677545" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.153677545"><input class="form-check-input" type="checkbox" name="entry.153677545" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.153677545"><input class="form-check-input" type="checkbox" name="entry.153677545" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},

// ENDORSEMENT TEXT AREA
		oneEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1976474932">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name="entry.1976474932" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		twoEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.2032406602">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="twoEndorsement" name="entry.2032406602" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		threeEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1579597763">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="threeEndorsement" name="entry.1579597763" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		fourEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.515281565">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="fourEndorsement" name="entry.515281565" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		fiveEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.548113430">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="fiveEndorsement" name="entry.548113430" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sixEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.455209790">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="sixEndorsement" name="entry.455209790" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sevenEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.547916445">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="sevenEndorsement" name="entry.547916445" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		eightEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1019579836">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="eightEndorsement" name="entry.1019579836" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		nineEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.22406345">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="nineEndorsement" name="entry.22406345" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		tenEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.394669954">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="tenEndorsement" name="entry.1942943631" rows="5"></textarea>');

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
