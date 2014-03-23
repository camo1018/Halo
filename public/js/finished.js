// Wait for DOM ready
$(function() {
	$(".fadeIn").animate({
		opacity: 1
	}, 1000, function() {
		// Animation complete
	});

	setTimeout(function() {
		$(".fadeIn").animate({
			opacity: 0
		}, 1000, function() {
			document.location = "intro";
		});
	}, 5000);
});