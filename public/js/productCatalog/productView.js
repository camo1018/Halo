// Wait for DOM ready
$(function() {
    $.get('/actions/productCatalog/getProductsForStep', function(products) {
        $(".fadeIn").animate({
            opacity: 1
        }, 1000, function () {
            // Animation complete
        });

        function productViewModel() {
            var self = this;
            self.products = products;
        }

        ko.applyBindings(new productViewModel());

        var masonry = $('#search-product-container').masonry({
            itemSelector: '.search-product',
            gutter: 50
        });

        var optionsStageVisible = false;
        var optionsStageAnimating = false;

        var selectedProduct;

        if (products.length > 0) {
            $('#productName').html(products[0].name);
            $('#productPrice').html(products[0].price);
            $('#productImage').attr('src', products[0].imageUrl);
            selectedProduct = products[0];
        }

        $('.optionsProductImage').on('click', function() {
            var productType = $(this).attr('productType');
            var productName = $(this).attr('productName');
            var params = { productType: productType, productName: productName };
            $.get('/actions/productCatalog/getProduct', params, function(product) {
                $('#productName').html(product.name);
                $('#productPrice').html(product.price);
                $('#productImage').attr('src', product.imageUrl);
                selectedProduct = product;
            });
        });

        $('#productCheck').bind('click', function () {
            var params = { product: selectedProduct };
            $.get('/actions/productCatalog/selectProduct', params, function() {
                $('.fadeIn').animate({
                    opacity: 0
                }, 1000, function () {
                    document.location = "stepScreen";
                });
            });
        });
    });
});