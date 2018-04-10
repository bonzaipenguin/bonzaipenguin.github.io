define(['jquery'], function($) {

	var searcher = {
		ui:$('<div class="searcher"></div>'),
		form:$('<form action="https://docs.google.com/forms/d/e/1FAIpQLScroaf1sG9fEwndS0Y2s0jmyGXnYQmpotXW-vcRQgyoAHEDFw/formResponse" target="hidden_iframe" method="POST" onsubmit="submitted=true;" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 application"></form>'),
		pageTitle:$('<h2 class="col-sm-12 form-title">Searcher Application</h2>'),
		basicInfo:function(){
			var item = $('<div class="col-sm-12 info"></div>');
			var title = $('<h3 class="blue">Your Basic Info</h3>');
			var a1 = $('<div class="form-group col-sm-6 required"><label for="entry.403519802">First Name</label><input class="form-control" type="text" name="entry.403519802" required></div>');
			var a2 = $('<div class="form-group col-sm-6 required"><label for="entry.1265844980">Last Name</label><input class="form-control" type="text" name="entry.1265844980" required></div>');
			var a3 = $('<div class="form-group col-sm-12"><label for="entry.134480120">LinkedIn Profile</label><input class="form-control" type="text" name="entry.134480120"></div>');
			var a4 = $('<div class="form-group col-sm-12 required"><label for="entry.978369127">Email Address</label><input class="form-control" type="email" name="entry.978369127" required></div>');
			var a5 = $('<div class="form-group col-sm-6 required"><label for="entry.138108916">Current Title</label><input class="form-control" type="text" name="entry.138108916" required></div>');
			var a6 = $('<div class="form-group col-sm-6 required"><label for="entry.1280882822">Current Company</label><input class="form-control" type="text" name="entry.1280882822" required></div>');
			item.append(title).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6);

			return item;
		},
		searchInfo:$('<div class="col-sm-12 info"><h3 class="blue">Open Board Seat Info</h3><h5>Tell us about the board seat you\'re looking to fill.</h5></div>'),
		company:$('<div class="form-group col-sm-12 required"><label for="entry.2137592569">Company Name</label><input class="form-control" type="text" name="entry.2137592569" required></div>'),
		annual:function(){
			var item = $('<div class="col-md-4 col-sm-12 form-group required"></div>');
			var title = $('<label for="entry.283487803">Annual Revenue</label>');
			var menu = $('<select class="form-control" id="annual" name="entry.283487803">');
			var a0 = $('<option selected>Select</option>');
			var a1 = $('<option name="entry.283487803" value="Under $5m">Under $5m</option>');
			var a2 = $('<option name="entry.283487803" value="$5m+">$5m+</option>');
			var a3 = $('<option name="entry.283487803" value="$25m+">$25m+</option>');
			var a4 = $('<option name="entry.283487803" value="$100m+">$100m+</option>');
			var a5 = $('<option name="entry.283487803" value="$500m+">$500m+</option>');
			var a6 = $('<option name="entry.283487803" value="Non-Profit">Non-Profit</option>');

			item.append(title).append(menu);
			menu.append(a0).append(a1).append(a2).append(a3).append(a4).append(a5).append(a6);

			return item;
		},
		venture:function(){
			var item = $('<div class="col-md-4 col-sm-12 form-group required"></div>');
			var title = $('<label for="entry.1215974747">Venture Funding</label>');
			var menu = $('<select class="form-control" id="venture" name="entry.1215974747">');
			var a0 = $('<option selected>Select</option>');
			var a1 = $('<option name="entry.1215974747" value="Not Applicable">N/A</option>');
			var a2 = $('<option name="entry.1215974747" value="Under $5m">Under $5m</option>');
			var a3 = $('<option name="entry.1215974747" value="Over $5m">Over $5m</option>');

			item.append(title).append(menu);
			menu.append(a0).append(a1).append(a2).append(a3);

			return item;
		},
		time:function(){
			var item = $('<div class="col-md-4 col-sm-12 form-group required"></div>');
			var title = $('<label for="entry.547707283">Timeframe to Fill Seat</label>');
			var menu = $('<select class="form-control" id="timeframe" name="entry.547707283">');
			var a0 = $('<option selected>Select</option>');
			var a1 = $('<option name="entry.547707283" value="1 month">1 month</option>');
			var a2 = $('<option name="entry.547707283" value="3 months">3 months</option>');
			var a3 = $('<option name="entry.547707283" value="6 months">6 months</option>');
			var a4 = $('<option name="entry.547707283" value="12 months">12 months</option>');
			var a5 = $('<option name="entry.547707283" value="Flexible">Flexible</option>');

			item.append(title).append(menu);
			menu.append(a0).append(a1).append(a2).append(a3).append(a4).append(a5);

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
