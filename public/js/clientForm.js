// Wait for DOM ready
$(function() {
	$("#welcome, #firstName, #lastName, #email, #lovedOneName, #continue").animate({
		opacity: 1
	}, 1000, function() {
		// Animation complete
	});

	$('#continue').bind('click', function() {
		$('#welcome, #firstName, #lastName, #email, #lovedOneName, #continue').animate({
			opacity: 0
		}, 1000, function() {
			document.location = "serviceSelect";
		});
	});

});