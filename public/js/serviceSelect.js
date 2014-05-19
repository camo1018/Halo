// Wait for DOM ready
$(function() {
	$("#welcome").animate({
		opacity: 1
	}, 1000, function() {
		// Animation complete
	});

	$('#traditional, #cremation, #continue').animate({
		opacity: 0.3
	}, 1000, function() {

	});

	$('#continue').prop('disabled', true);

	$('#traditional, #cremation').bind('click', function() {
		$('#traditional, #cremation').not(this).prop('disabled', false);
		$(this).prop('disabled', true);
		$('#traditional, #cremation').not(this).animate({ opacity: 0.3 }, 250);
		$(this).animate({ opacity: 1 }, 250);
		$('#continue').prop('disabled', false);
		$('#continue').animate({ opacity: 1 }, 250);
	});

	$('#continue').bind('click', function() {
		if ($('#traditional').prop('disabled'))
			$.get('/actions/selectTraditional');
		else
			$.get('/actions/selectCremation');

		$('#welcome, #traditional, #cremation, #continue').animate({
			opacity: 0
		}, 1000, function() {
			document.location = "stepScreen";
		});
	});

});