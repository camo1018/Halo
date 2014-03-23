// Wait for DOM ready
$(function() {
	$(".fadeIn").animate({
		opacity: 1
	}, 1000, function() {
		// Animation complete
	});

	$('#approveButton').bind('click', function() {
		$('.fadeIn').animate({
			opacity: 0
		}, 1000, function() {
			document.location = "finished";
		});
	});
});