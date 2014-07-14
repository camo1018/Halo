// Wait for DOM ready
$(function() {
	$(".fadeIn").animate({
		opacity: 1
	}, 1000, function() {
		// Animation complete
	});

    $.get('/actions/getSelectedProducts', function(products) {
        function reviewViewModel() {
            var self = this;

            self.products = ko.observableArray(products);
        }

        ko.applyBindings(new reviewViewModel());

        var totalPrice = '$';
        for (var i = 0; i < products.length; i++) {
            totalPrice += products[i].price;
        }

        $('#approveButton').bind('click', function() {
            $('.fadeIn').animate({
                opacity: 0
            }, 1000, function() {
                document.location = "finished";
            });
        });

        $('#totalPriceLabel').html(totalPrice);
    });
});