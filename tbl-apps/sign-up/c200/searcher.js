define(['jquery'], function($) {

	var searcher = {
		ui:$('<div class="searcher"></div>'),
		// reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		// reFrame:$('<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted)  {window.location="www.theboardlist.com";}"></iframe>'),
		form:$('<form action="https://docs.google.com/forms/d/e/1FAIpQLSdS1Nx3WhO4_08OcQbBNy66LIF1JUX4dqToi9zB_PGSA1uIsw/formResponse" target="hidden_iframe" method="POST" onsubmit="submitted=true;" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application"></form>'),
		pageTitle:$('<h2 class="col-sm-12 form-title">Searcher Application</h2>'),
		basicInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Basic Info</h3>');
			var a1 = $('<div class="form-group col-sm-6 required"><label for="entry.1836994050">First Name</label><input class="form-control" type="text" name="entry.1836994050"></div>');
			var a2 = $('<div class="form-group col-sm-6 required"><label for="entry.1553795584">Last Name</label><input class="form-control" type="text" name="entry.1553795584"></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.376483212">LinkedIn Profile (Optional)</label><input class="form-control" type="text" name="entry.376483212"></div>');
			var a4 = $('<div class="form-group col-sm-12 required"><label for="entry.745559345">Email Address</label><input class="form-control" type="email" name="entry.745559345"></div>');

			item.append(title).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		searchInfo:$('<div class="col-sm-12 info"><h3 class="blue">Open Board Seat Info</h3><h5>Tell us about the board seat you\'re looking to fill</h5></div>'),
		company:$('<div class="form-group col-sm-12 required"><label for="entry.1592058083">Company Name</label><input class="form-control" type="text" name="entry.1592058083"></div>'),
		annual:function(){
			var item = $('<div class="col-md-4 col-sm-12 form-group required"></div>');
			var title = $('<label for="">Annual Revenue</label>');
			var menu = $('<select class="form-control" id="annual" name="entry.1457385037">');
			var a0 = $('<option selected>Select</option>');
			var a1 = $('<option name="entry.1457385037" value="Under $5m">Under $5m</option>');
			var a2 = $('<option name="entry.1457385037" value="$5m+">$5m+</option>');
			var a3 = $('<option name="entry.1457385037" value="$25m+">$25m+</option>');
			var a4 = $('<option name="entry.1457385037" value="$100m+">$100m+</option>');
			var a5 = $('<option name="entry.1457385037" value="$500m+">$500m+</option>');
			var a6 = $('<option name="entry.1457385037" value="Priavate $5m+">Priavate $5m+</option>');
			var a7 = $('<option name="entry.1457385037" value="Non-Profit">Non-Profit</option>');

			item.append(title).append(menu);
			menu.append(a0).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6).append(a7);

			return item;
		},
		venture:function(){
			var item = $('<div class="col-md-4 col-sm-12 form-group required"></div>');
			var title = $('<label for="">Venture Funding</label>');
			var menu = $('<select class="form-control" id="venture" name="entry.557468006">');
			var a0 = $('<option selected>Select</option>');
			var a1 = $('<option name="entry.557468006" value="Not Applicable">N/A</option>');
			var a2 = $('<option name="entry.557468006" value="Under $5m">Under $5m</option>');
			var a3 = $('<option name="entry.557468006" value="Over $5m">Over $5m</option>');

			item.append(title).append(menu);
			menu.append(a0).append(a1).append(a2).append(a3);

			return item;
		},
		time:function(){
			var item = $('<div class="col-md-4 col-sm-12 form-group required"></div>');
			var title = $('<label for="">Timeframe to Fill Seat</label>');
			var menu = $('<select class="form-control" id="timeframe" name="entry.296294807">');
			var a0 = $('<option selected>Select</option>');
			var a1 = $('<option name="entry.296294807" value="1 month">1 month</option>');
			var a2 = $('<option name="entry.296294807" value="3 months">3 months</option>');
			var a3 = $('<option name="entry.296294807" value="6 months">6 months</option>');
			var a4 = $('<option name="entry.296294807" value="12 months">12 months</option>');

			item.append(title).append(menu);
			menu.append(a0).append(a1).append(a2).append(a3).append(a4);

			return item;
		},
		sub: function(){
			var item = $('<div class="col-sm-12 col-xs-12 form-group submit-btn"></div>');
      var button = $('<button type="submit" class="btn btn-primary col-sm-2">Submit</button>');
			item.append(button);

			return item;
		}
	};

	searcher.ui.append(searcher.form);
	searcher.form.append(searcher.pageTitle).append(searcher.basicInfo).append(searcher.searchInfo).append(searcher.sub);
	searcher.searchInfo.append(searcher.company).append(searcher.annual).append(searcher.venture).append(searcher.time);

	return searcher;
});
