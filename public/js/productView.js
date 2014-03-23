// Wait for DOM ready
$(function() {
	$(".fadeIn").animate({
		opacity: 1
	}, 1000, function() {
		// Animation complete
	});

	var optionsStageVisible = false;
	var optionsStageAnimating = false;

	$('#showOptions').bind('click', function() {
		if (optionsStageAnimating)
			return;

		optionsStageAnimating = true;

		if (optionsStageVisible) {
			$('.optionsStage, .scrolling').animate({
				bottom: "-=200px"
			}, 500, function() {
				optionsStageVisible = false;
				optionsStageAnimating = false;
			});
		}
		else {
			$('.optionsStage, .scrolling').animate({
				bottom: "+=200px"
			}, 500, function() {
				optionsStageVisible = true;
				optionsStageAnimating = false;
			});
		}
	});

	$('#productCheck').bind('click', function() {
		$('.fadeIn').animate({
			opacity: 0
		}, 1000, function() {
			document.location = "review";
		});
	});
});