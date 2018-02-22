define(['jquery'], function($) {

	var test = {
		ui:$('<div class="layer white test"></div>'),
		reScript:$('<script type="text/javascript">var submitted=false;</script>'),
		reFrame:$('<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted)  {window.location="www.theboardlist.com";}"></iframe>'),
		form:$('<form action="https://docs.google.com/forms/d/e/1FAIpQLScUzvnWXnyFORvUtEYJYLHdpZeyVBXcFmLDLbxoP6XqmZUKgQ/formResponse" target="hidden_iframe" method="POST" onsubmit="submitted=true;" class="col-sm-8 col-offset-sm-2"></form>'),
		radios:function(){
			var item = $('<fieldset class="form-group row"></fieldset>');
			var title = $('<h3>Does this work?</h3>');
			var r1 = $('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="radio" name="entry.261458796" value="Yes">Yes</label></div>');
			var r2 = $('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="radio" name="entry.261458796" value="No">No</label></div>');
			var r3 = $('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="radio" name="entry.261458796" value="Maybe">Maybe</label></div>');

			item.append(title).append(r1).append(r2).append(r3);

			return item;
		},
		checks:function(){
			var item = $('<fieldset class="form-group row"></fieldset>');
			var title = $('<h3>How about now?</h3>');
			var r1 = $('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="entry.1822554909" value="Yes">Yes</label></div>');
			var r2 = $('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="entry.1822554909" value="No">No</label></div>');
			var r3 = $('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="entry.1822554909" value="Maybe">Maybe</label></div>');

			item.append(title).append(r1).append(r2).append(r3);

			return item;
		},
		title:$('<h4>Talk to me</h4>'),
		writing:function(){
			var item = $('<div class="form-group row"></div>');
			var title = $('<label class="col-sm-2 col-form-label">Something</label>');
      var t1 = $('<div class="col-sm-10"><input type="text" class="form-control" name="entry.563972863"></div>');

			item.append(title).append(t1);

			return item;
		},
		sub: function(){
			var item = $('<div class="form-group row">');
      var s1 = $('<div class="offset-sm-2 col-sm-10">');
      var button = $('<button type="submit" class="btn btn-primary">Submit</button>');
			item.append(s1.append(button));

			return item;
		}
	};
	test.ui.append(test.reScript).append(test.reFrame).append(test.form);
	test.form.append(test.radios).append(test.checks).append(test.title).append(test.writing).append(test.sub);

	return test;
});
