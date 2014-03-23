// Wait for DOM ready
$(function() {
	$("[class*=step], .homeButton").animate({
		opacity: 1
	}, 1000, function() {
		// Animation complete
	});

	$('#continue').animate({
		opacity: 0.3
	}, 1000);

	$('#continue').prop('disabled', true);

	$(".stepButton").bind('click', function() {
		$(this).addClass('stepButtonActive')
		var label = $(this).parent().find('.stepLabel');
		label.addClass('stepLabelActive');
		$('.stepButton').not(this).removeClass('stepButtonActive');
		$('.stepLabel').not(label).removeClass('stepLabelActive');
		$('#continue').animate({
			opacity: 1
		}, 250, function() {
			$('#continue').prop('disabled', false);
		});
	})

	$('#continue').bind('click', function() {
		$('[class*=step], #continue, .homeButton').animate({
			opacity: 0
		}, 1000, function() {
			document.location = "productView";
		});
	});

	$('.homeButton').bind('click', function() {
		$('[class*=step], #continue, .homeButton').animate({
			opacity: 0
		}, 1000, function() {
			document.location = "intro";
		});
	});
});