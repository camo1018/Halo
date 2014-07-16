// Wait for DOM ready
$(function() {
	$("#fadeTag, #fadeCredo").animate({
		opacity: 1
	}, 1000, function() {
		// Animation complete
	});

	$('#continueLabel').delay(5000).animate({
		opacity: 1
	}, 1000, function() {

	});

	document.onclick = function() {
		$('#fadeTag, #fadeCredo, #continueLabel').animate({
			opacity: 0
		}, 1000, function() {
			document.location = "serviceSelect";
		});
	};

});