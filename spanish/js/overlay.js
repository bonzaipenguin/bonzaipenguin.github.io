define(['jquery','model','controller','flashCards'], function($,model,controller,flashCards) {

	var overlay = {
		ui: $('<section class="overlay" data-answer="" data-second=""></section>'),
		timeBar: $('<div class="time-bar"></div>'),
		timeMarker: $('<div class="time-marker"></div>'),
		englishInput: $('<input autofocus type="text" class="answer-input">'),
		spanishInput: $('<input autofocus type="text" class="answer-input">'),
		errorMSG: $('<h1 class="try-again">try again</h1>'),
		close: $('<h1 class="close icon icon-delete-1"></h1>')
	};
	overlay.ui.append(overlay.close).append(overlay.timeBar.append(overlay.timeMarker)).append(overlay.englishInput).append(overlay.spanishInput).append(overlay.errorMSG);
	overlay.ui.hide();
	overlay.spanishInput.hide();
	
	var expanded = false;
	function startTimer(){
		overlay.timeMarker.stop();
	  var duration;
	  if (!expanded) {
	    duration = ((1020 - overlay.timeMarker.width()) / 1020) * 30000;
	    overlay.timeMarker.animate({ width: '1020px' },
	    	{
	    		queue: false,
	    		duration: duration,
	    		complete: function(){
			      model.total = model.total+1;
			      controller.updated.dispatch();
			      overlay.close.css({'color':'#f36'});
						overlay.englishInput.val(overlay.ui.attr('data-answer'));
						overlay.englishInput.prop('disabled', true);
						overlay.timeMarker.stop();
						overlay.timeMarker.css({'width':'0'});
					  expanded = false;
			    }
	    	});
	    expanded = true;
	  }
	}
	controller.started.add(startTimer);

	function focusAnswer(){
		overlay.englishInput.focus();
	}
	controller.focused.add(focusAnswer);

	overlay.close.on('click',function(){
		overlay.ui.fadeOut();
		overlay.ui.attr('data-answer','');
		overlay.ui.attr('data-second','');
		overlay.englishInput.val('');
		overlay.spanishInput.val('');
		overlay.timeMarker.stop();
		overlay.timeMarker.css({'width':'0'});
		overlay.close.css({'color':'#000'});
		model.attempts = 0;
	  expanded = false;
	});
	
	overlay.englishInput.on('keyup',function(e) {
		var correct = overlay.ui.attr('data-answer');
		var answer = overlay.englishInput.val().toLowerCase();
		overlay.errorMSG.hide();
		if(e.keyCode == 13) {
			if(answer == correct) {
        overlay.englishInput.val('');
        model.activeCard.attr('data-state','right').children('.english-phrase').css({'opacity':'1'});
        model.activeCard.attr('data-state','right').children('.spanish-phrase').css({'opacity':'1'});
        overlay.timeMarker.stop();
        overlay.timeMarker.css({'width':'0'});
        model.win = model.win+1;
        model.total = model.total+1;
        model.attempts = 0;
        controller.updated.dispatch();
	  		expanded = false;
	  		overlay.ui.fadeOut();
			} if(answer != correct){
				if (model.attempts == 3){
					overlay.englishInput.val(correct);
					overlay.englishInput.prop('disabled', true);
					overlay.close.css({'color':'#f36'});
					overlay.timeMarker.stop();
	        overlay.timeMarker.css({'width':'0'});
		  		expanded = false;
		  		model.total = model.total+1;
		  		controller.updated.dispatch();
				}
        if (model.attempts < 3){
        	overlay.englishInput.val('');
        	overlay.errorMSG.show();
        	model.attempts = model.attempts+1;
	        model.activeCard.attr('data-state','wrong');
	        overlay.timeMarker.stop();
	        overlay.timeMarker.css({'width':'0'});
		  		expanded = false;
		  		startTimer();
        }
			}
		}
	});
	

	return overlay;
});