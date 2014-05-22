// Wait for DOM ready
$(function() {
	var serviceType, currentServiceStep, serviceSteps;
	var selectedStep;
	$.get('/actions/getStepScreenInformation', function(data) {
		serviceType = data.serviceType;
		currentServiceStep = data.currentServiceStep;
		serviceSteps = data.serviceSteps;

		function toTitleCase(str) {
		    return str.replace(/(?:^|\s)\w/g, function(match) {
		        return match.toUpperCase();
		    });
		}

		function stepViewModel() {
			var self = this;

			self.steps = serviceSteps;

			var currentStepHeaderLabel = Enumerable.From(serviceSteps).Single('$.stepOrder == ' + currentServiceStep).stepHeaderName;
		
			$('#stepTitle').html(toTitleCase(serviceType + ' Service'));			
			$('#stepDescription').html('Select a ' + currentStepHeaderLabel + '.');
		}

		ko.applyBindings(new stepViewModel());

        $.get('/actions/getFinishedSteps', function(finishedSteps) {
            $('.stepButton').each(function() {
                var isStepFinished = false;
                for (var i = 0; i < finishedSteps.length; i++) {
                    if (finishedSteps[i].stepOrder == $(this).html()) {
                        isStepFinished = true;
                    }
                }
                if (isStepFinished) {
                    $(this).html('Done');;
                    $(this).prop('disabled', true);
                }
            });
        });

		$("[class*=step], .homeButton").animate({
			opacity: 1
		}, 1000, function() {
			// Animation complete
		});

		$('#continue').animate({
			opacity: 0.3
		}, 1000);

        $('#checkout').animate({
            opacity: 1
        }, 1000);

		$('#continue').prop('disabled', true);

		$(".stepButton").bind('click', function() {
			selectedStep = $(this);
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
			var params = { stepOrder: selectedStep.html() };
			$.get('/actions/selectStep', params, function() {
                $('[class*=step], #continue, .homeButton').animate({
                    opacity: 0
                }, 1000, function () {
                    document.location = "productView";
                });
            });
		});

        $('#checkout').bind('click', function() {
            $('[class*=step], #continue, .homeButton').animate({
                opacity: 0
            }, 1000, function() {
                document.location = 'review';
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
});