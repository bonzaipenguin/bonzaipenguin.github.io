define(['jquery','model','controller','overlay'], function($,model,controller,overlay) {
	var flashCards = {
		ui:$('<div class="col-sm-12 card-grid"></div>'),
		header:$('<header class="col-sm-12 menu"></header>'),
		spanishBTN:$('<div class="col-xs-6 col-sm-4 view-tab">Test for English</div>'),
		englishBTN:$('<div class="col-xs-6 col-sm-4 view-tab">Test for Spanish</div>'),
		score: $('<div class="col-xs-12 col-sm-4 view-tab score-tracker">score: 0 of 0</div>'),
		card:function(spanish,english){
			var container = $('<div class="col-xs-4 col-sm-3 card" data-esp="'+spanish+'" data-eng="'+english+'" data-state=""></div>');
			var spanish = $('<h5 class="spanish-phrase">'+spanish+'</h5>');
			var english = $('<h5 class="english-phrase">'+english+'</h5>');
			container.append(spanish).append(english);

			container.on('click',function(){
				var spanAnswer = $(this).attr('data-esp');
				var engAnswer = $(this).attr('data-eng');

				if (flashCards.spanishBTN.hasClass('on')) {
					overlay.ui.attr('data-answer',engAnswer);
					model.activeCard = $(container);
					overlay.ui.fadeIn().addClass('shown');
					console.log(engAnswer);
					model.attempts = model.attempts+1;
					overlay.englishInput.prop('disabled', false);
					controller.started.dispatch();
					controller.focused.dispatch();
				}
				if (flashCards.englishBTN.hasClass('on')) {
					overlay.ui.attr('data-answer',spanAnswer);
					model.activeCard = $(container);
					overlay.ui.fadeIn().addClass('shown');
					console.log(spanAnswer);
					model.attempts = model.attempts+1;
					overlay.spanishInput.prop('disabled', false);
					controller.started.dispatch();
					controller.focused.dispatch();
				}
			});

			return container
		},

	};
	flashCards.ui.append(flashCards.header.append(flashCards.spanishBTN).append(flashCards.englishBTN).append(flashCards.score));
	model.phraseList.forEach(function(i){
		flashCards.ui.append(new flashCards.card(i.spanish,i.english));
	});
	flashCards.spanishBTN.on('click',function(){
		flashCards.englishBTN.removeClass('on');
		flashCards.spanishBTN.addClass('on');
		$('.english-phrase').animate({'opacity':'0'});
		$('.spanish-phrase').animate({'opacity':'1'});
	});
	flashCards.englishBTN.on('click',function(){
		flashCards.spanishBTN.removeClass('on');
		flashCards.englishBTN.addClass('on');
		$('.spanish-phrase').animate({'opacity':'0'});
		$('.english-phrase').animate({'opacity':'1'});
	});	
	function updateScore(){
		flashCards.score.css({'opacity':'1'});
		flashCards.score.html('score: '+model.win+' of '+model.total);
	}
	controller.updated.add(updateScore);

	return flashCards;
});