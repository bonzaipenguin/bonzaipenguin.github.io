define(['jquery'], function($) {

	var endorser = {
		ui:$('<div class="endorser"></div>'),
		reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		form:$('<form action="https://docs.google.com/forms/d/e/1FAIpQLSevCmcL5md953MtvFkbOVSNHy_9tuLBqYN-MPEpG5Q0NvO6rQ/formResponse" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application" method="post" onsubmit="submitted=true;" target="hidden_iframe"></form>'),
		pageTitle:$('<h2 class="col-sm-12 col-xs-12 form-title">theBoardlist Canada Endorser Member Application</h2>'),
		basicInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Basic Info</h3>');
			var sub1 = $('<h6 class="sub-title italic">Endorsing Members must meet one of the below criteria:</h6>');
			var sub2 = $('<h6 class="sub-title italic">And must have experience serving on:</h6>');
			var qL1 = $('<ul></ul>');
			var qL2 = $('<ul></ul>');
			var qual1 = $('<li>A CEO or C-suite of a company with at least one round of institutional funding</li>');
			var qual2 = $('<li>A seed, VC, or a private equity investor, or</li>');
			var qual3 = $('<li>An influencer, thought leader, or domain expert in their industry</li>');
			var qual4 = $('<li>A Public Board</li>');
			var qual5 = $('<li>A Private Board, or</li>');
			var qual6 = $('<li>A Non-Profit Board</li>');
			var a1 = $('<div class="form-group required col-sm-6"><label class="required" for="entry.454116553">First Name</label><input class="form-control" type="text" name="entry.454116553" required></div>');
			var a2 = $('<div class="form-group required col-sm-6"><label class="required" for="entry.1041849810">Last Name</label><input class="form-control" type="text" name="entry.1041849810" required></div>');
			var a3 = $('<div class="form-group col-sm-6 required"><label class="required" for="entry.637252194">City</label><input class="form-control" type="text" name="entry.637252194" required></div>');
			var a4 = $('<div class="form-group col-sm-6 required"><label class="required" for="entry.379905201">Country</label><input class="form-control" type="text" name="entry.379905201" required></div>');
			var a5 = $('<div class="form-group col-sm-12"><label for="entry.906338201">LinkedIn Profile</label><input class="form-control" type="text" name="entry.906338201"></div>');
			var a6 = $('<div class="form-group required col-sm-12"><label class="required" for="entry.1213949020">Personal Email Address</label><input class="form-control" type="email" name="entry.1213949020" required></div>');
			var a7 = $('<div class="form-group required col-sm-6"><label class="required" for="entry.1331327338">Current or Most Recent Company</label><input class="form-control" type="text" name="entry.1331327338" required></div>');
			var a8 = $('<div class="form-group required col-sm-6"><label class="required" for="entry.1693041106">Current or Most Recent Title</label><input class="form-control" type="text" name="entry.1693041106" required></div>');

			item.append(title).append(sub1).append(qL1).append(sub2).append(qL2).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6).append(a7).append(a8);
			qL1.append(qual1).append(qual2).append(qual3);
			qL2.append(qual4).append(qual5).append(qual6);

			return item;
		},
		boardInfo:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var title = $('<h3 class="blue">Your Board Experience</h3>');
			var sub = $('<h5 class="medium required">Click all that apply:</h5>');
			var a1 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1875722957"><input class="form-check-input" type="checkbox" name="entry.1875722957" value="Public">Public board</label></div>');
			var a2 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1875722957"><input class="form-check-input" type="checkbox" name="entry.1875722957" value="Private">Private board</label></div>');
			var a3 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1875722957"><input class="form-check-input" type="checkbox" name="entry.1875722957" value="Non-Profit">Non-Profit Board</label></div>');
			var a4 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1875722957"><input class="form-check-input" type="checkbox" name="entry.1875722957" value="Advisory">Advisory Board</label></div>');
			var a5 = $('<div class="form-check col-sm-12"><label class="form-check-label" for="entry.1875722957"><input class="form-check-input" type="checkbox" name="entry.1875722957" value="None">N/A</label></div>');

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
			var i3 = $('<li>CEO, C-suite (or VP+) at companies with $25m+ revenue</li>');
			var i4 = $('<li>Directors at companies with $500m+ revenue</li>');

			var a1 = $('<div class="form-group required col-sm-6"><label class="required" for="entry.1301862767">First Name</label><input class="form-control" type="text" name="entry.1301862767" required></div>');
			var a2 = $('<div class="form-group required col-sm-6"><label class="required" for="entry.30915103">Last Name</label><input class="form-control" type="text" name="entry.30915103" required></div>');
			var a3 = $('<div class="form-group required col-sm-12"><label class="required" for="entry.1530756767">Personal Email Address</label><input class="form-control" type="email" name="entry.1530756767" required></div>');
			var a4 = $('<div class="form-group required col-sm-12"><label class="required" for="entry.1490185425">Current Company</label><input class="form-control" type="text" name="entry.1490185425" required></div>');

			item.append(title).append(sub).append(exp).append(list).append(a1).append(a2).append(a3).append(a4);
			list.append(i1).append(i2).append(i3).append(i4);

			return item;
		},
		twoInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Second Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.611095721">First Name</label><input class="form-control" type="text" name="entry.611095721"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1254745935">Last Name</label><input class="form-control" type="text" name="entry.1254745935"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1032496374">Personal Email Address</label><input class="form-control" type="email" name="entry.1032496374"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1770590803">Current Company</label><input class="form-control" type="text" name="entry.1770590803"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		threeInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Third Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.595694965">First Name</label><input class="form-control" type="text" name="entry.595694965"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1968535437">Last Name</label><input class="form-control" type="text" name="entry.1968535437"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.806967195">Personal Email Address</label><input class="form-control" type="email" name="entry.806967195"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1320432879">Current Company</label><input class="form-control" type="text" name="entry.1320432879"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		fourInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Fourth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.504372000">First Name</label><input class="form-control" type="text" name="entry.504372000"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1931210336">Last Name</label><input class="form-control" type="text" name="entry.1931210336"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.158036703">Personal Email Address</label><input class="form-control" type="email" name="entry.158036703"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.290134072">Current Company</label><input class="form-control" type="text" name="entry.290134072"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		fiveInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Fifth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1360682740">First Name</label><input class="form-control" type="text" name="entry.1360682740"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.109454907">Last Name</label><input class="form-control" type="text" name="entry.109454907"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1423794529">Personal Email Address</label><input class="form-control" type="email" name="entry.1423794529"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1029888282">Current Company</label><input class="form-control" type="text" name="entry.1029888282"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sixInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Sixth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.130176699">First Name</label><input class="form-control" type="text" name="entry.130176699"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1242540408">Last Name</label><input class="form-control" type="text" name="entry.1242540408"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1874950778">Personal Email Address</label><input class="form-control" type="email" name="entry.1874950778"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.65169642">Current Company</label><input class="form-control" type="text" name="entry.65169642"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sevenInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Seventh Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.73489521">First Name</label><input class="form-control" type="text" name="entry.73489521"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.1370236294">Last Name</label><input class="form-control" type="text" name="entry.1370236294"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.1025832847">Personal Email Address</label><input class="form-control" type="email" name="entry.1025832847"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1248839656">Current Company</label><input class="form-control" type="text" name="entry.1248839656"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		eightInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Eighth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.2012966335">First Name</label><input class="form-control" type="text" name="entry.2012966335"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.35072522">Last Name</label><input class="form-control" type="text" name="entry.35072522"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.805223451">Personal Email Address</label><input class="form-control" type="email" name="entry.805223451"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1518256844">Current Company</label><input class="form-control" type="text" name="entry.1518256844"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		nineInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Ninth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1302836208">First Name</label><input class="form-control" type="text" name="entry.1302836208"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.2034574516">Last Name</label><input class="form-control" type="text" name="entry.2034574516"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.20561193">Personal Email Address</label><input class="form-control" type="email" name="entry.20561193"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.1727151473">Current Company</label><input class="form-control" type="text" name="entry.1727151473"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		tenInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Endorse a Tenth Candidate</h3>');
			var a1 = $('<div class="form-group col-sm-6"><label for="entry.1274097223">First Name</label><input class="form-control" type="text" name="entry.1274097223"></div>');
			var a2 = $('<div class="form-group col-sm-6"><label for="entry.265871947">Last Name</label><input class="form-control" type="text" name="entry.265871947"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.2138389093">Personal Email Address</label><input class="form-control" type="email" name="entry.2138389093"></div>');
			var a4 = $('<div class="form-group col-sm-12"><label for="entry.2027363911">Current Company</label><input class="form-control" type="text" name="entry.2027363911"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},

// BOARD INFO
		oneBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium required">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.2131023948"><input class="form-check-input" type="checkbox" name="entry.2131023948" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.2131023948"><input class="form-check-input" type="checkbox" name="entry.2131023948" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.2131023948"><input class="form-check-input" type="checkbox" name="entry.2131023948" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.2131023948"><input class="form-check-input" type="checkbox" name="entry.2131023948" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.2131023948"><input class="form-check-input" type="checkbox" name="entry.2131023948" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.2131023948"><input class="form-check-input" type="checkbox" name="entry.2131023948" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		twoBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1130082177"><input class="form-check-input" type="checkbox" name="entry.1130082177" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1130082177"><input class="form-check-input" type="checkbox" name="entry.1130082177" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1130082177"><input class="form-check-input" type="checkbox" name="entry.1130082177" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1130082177"><input class="form-check-input" type="checkbox" name="entry.1130082177" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1130082177"><input class="form-check-input" type="checkbox" name="entry.1130082177" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1130082177"><input class="form-check-input" type="checkbox" name="entry.1130082177" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		threeBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1357478588"><input class="form-check-input" type="checkbox" name="entry.1357478588" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1357478588"><input class="form-check-input" type="checkbox" name="entry.1357478588" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1357478588"><input class="form-check-input" type="checkbox" name="entry.1357478588" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1357478588"><input class="form-check-input" type="checkbox" name="entry.1357478588" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1357478588"><input class="form-check-input" type="checkbox" name="entry.1357478588" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1357478588"><input class="form-check-input" type="checkbox" name="entry.1357478588" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		fourBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.388630728"><input class="form-check-input" type="checkbox" name="entry.388630728" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.388630728"><input class="form-check-input" type="checkbox" name="entry.388630728" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.388630728"><input class="form-check-input" type="checkbox" name="entry.388630728" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.388630728"><input class="form-check-input" type="checkbox" name="entry.388630728" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.388630728"><input class="form-check-input" type="checkbox" name="entry.388630728" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.388630728"><input class="form-check-input" type="checkbox" name="entry.388630728" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		fiveBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1517772261"><input class="form-check-input" type="checkbox" name="entry.1517772261" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1517772261"><input class="form-check-input" type="checkbox" name="entry.1517772261" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1517772261"><input class="form-check-input" type="checkbox" name="entry.1517772261" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1517772261"><input class="form-check-input" type="checkbox" name="entry.1517772261" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1517772261"><input class="form-check-input" type="checkbox" name="entry.1517772261" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1517772261"><input class="form-check-input" type="checkbox" name="entry.1517772261" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		sixBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1423119525"><input class="form-check-input" type="checkbox" name="entry.1423119525" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1423119525"><input class="form-check-input" type="checkbox" name="entry.1423119525" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1423119525"><input class="form-check-input" type="checkbox" name="entry.1423119525" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1423119525"><input class="form-check-input" type="checkbox" name="entry.1423119525" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1423119525"><input class="form-check-input" type="checkbox" name="entry.1423119525" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1423119525"><input class="form-check-input" type="checkbox" name="entry.1423119525" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		sevenBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.194000416"><input class="form-check-input" type="checkbox" name="entry.194000416" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.194000416"><input class="form-check-input" type="checkbox" name="entry.194000416" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.194000416"><input class="form-check-input" type="checkbox" name="entry.194000416" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.194000416"><input class="form-check-input" type="checkbox" name="entry.194000416" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.194000416"><input class="form-check-input" type="checkbox" name="entry.194000416" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.194000416"><input class="form-check-input" type="checkbox" name="entry.194000416" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		eightBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.747601780"><input class="form-check-input" type="checkbox" name="entry.747601780" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.747601780"><input class="form-check-input" type="checkbox" name="entry.747601780" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.747601780"><input class="form-check-input" type="checkbox" name="entry.747601780" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.747601780"><input class="form-check-input" type="checkbox" name="entry.747601780" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.747601780"><input class="form-check-input" type="checkbox" name="entry.747601780" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.747601780"><input class="form-check-input" type="checkbox" name="entry.747601780" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		nineBoard:function(){
			var item = $('<div class="col-sm-12 form-group info checkboxes"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.627167579"><input class="form-check-input" type="checkbox" name="entry.627167579" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.627167579"><input class="form-check-input" type="checkbox" name="entry.627167579" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.627167579"><input class="form-check-input" type="checkbox" name="entry.627167579" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.627167579"><input class="form-check-input" type="checkbox" name="entry.627167579" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.627167579"><input class="form-check-input" type="checkbox" name="entry.627167579" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.627167579"><input class="form-check-input" type="checkbox" name="entry.627167579" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},
		tenBoard:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<h5 class="medium">Best suited for (2 max):</h5>');
			var g1 = $('<div class="col-sm-6"></div>');
			var g2 = $('<div class="col-sm-6"></div>');
			var a1 = $('<div class="form-check"><label class="form-check-label" for="entry.1357282739"><input class="form-check-input" type="checkbox" name="entry.1357282739" value="Early Stage">Early Stage (Series A/B)</label></div>');
			var a2 = $('<div class="form-check"><label class="form-check-label" for="entry.1357282739"><input class="form-check-input" type="checkbox" name="entry.1357282739" value="Mid Stage">Mid Stage (Series B/B+ - D)</label></div>');
			var a3 = $('<div class="form-check"><label class="form-check-label" for="entry.1357282739"><input class="form-check-input" type="checkbox" name="entry.1357282739" value="Late Stage">Late Stage (Series E/F+)</label></div>');
			var a4 = $('<div class="form-check"><label class="form-check-label" for="entry.1357282739"><input class="form-check-input" type="checkbox" name="entry.1357282739" value="Public">Public</label></div>');
			var a5 = $('<div class="form-check"><label class="form-check-label" for="entry.1357282739"><input class="form-check-input" type="checkbox" name="entry.1357282739" value="Non-Profit">Non Profit</label></div>');
			var a6 = $('<div class="form-check"><label class="form-check-label" for="entry.1357282739"><input class="form-check-input" type="checkbox" name="entry.1357282739" value="Advisory">Advisory</label></div>');

			item.append(sub).append(g1.append(a1).append(a2).append(a3)).append(g2.append(a4).append(a5).append(a6));

			return item;
		},

// ENDORSEMENT TEXT AREA
		oneEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.832187707">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="oneEndorsement" name="entry.832187707" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		twoEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.169037602">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="twoEndorsement" name="entry.169037602" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		threeEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.604105580">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="threeEndorsement" name="entry.604105580" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		fourEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.418826694">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="fourEndorsement" name="entry.418826694" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		fiveEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1888050382">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="fiveEndorsement" name="entry.1888050382" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sixEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1246819696">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="sixEndorsement" name="entry.1246819696" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		sevenEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.1915035093">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="sevenEndorsement" name="entry.1915035093" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		eightEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.416427531">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="eightEndorsement" name="entry.416427531" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		nineEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.2007328930">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="nineEndorsement" name="entry.2007328930" rows="5"></textarea>');

			item.append(sub).append(a1);

			return item;
		},
		tenEnd:function(){
			var item = $('<div class="col-sm-12 form-group info"></div>');
			var sub = $('<label for="entry.288822565">What makes this person great for boards?</label>');
			var a1 = $('<textarea class="form-control" id="tenEndorsement" name="entry.288822565" rows="5"></textarea>');

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
	endorser.form.append(endorser.pageTitle).append(endorser.errors).append(endorser.basicForm).append(endorser.endoForms).append(endorser.sub);
	endorser.basicForm.append(endorser.basicInfo).append(endorser.boardInfo);
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
