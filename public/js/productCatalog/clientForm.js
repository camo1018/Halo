// Wait for DOM ready
$(function() {

	var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
	var email = $('#email').val();
	var departedName = $('#lovedOneName').val();

	$("#welcome, #firstName, #lastName, #email, #lovedOneName, #continue").animate({
		opacity: 1
	}, 1000, function() {
		// Animation complete
	});

	$('#continue').bind('click', function() {
		var parameters = { firstName: firstName, lastName: lastName, email: email, departedName: departedName };
		$.get('/actions/submitClientInfo', parameters, function(data) {
			$('#welcome, #firstName, #lastName, #email, #lovedOneName, #continue').animate({
				opacity: 0
			}, 1000, function() {
				document.location = "serviceSelect";
			});
		});
	});

});