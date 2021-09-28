
$(document).ready(function () {

    $('.landing-page').show();
    $('.generate').hide();
    $('.brief-results').hide();
    $('.img-brief-result').hide();
    $('.upload-image').hide();
    $('.upload-view').hide();
    $('.cart').hide();
    $('.checkout').hide();
    $('.image-purchased').hide();
    $('.token-purchased').hide();
    $('.pricing').hide();

    $('.logo-img').click(function () {
        $('.pricing').hide();
        $('.landing-page').show();
        $('.generate').hide();
        $('.brief-results').hide();
        $('.img-brief-result').hide();
        $('.upload-image').hide();
        $('.upload-view').hide();
        $('.cart').hide();
        $('.checkout').hide();
        $('.image-purchased').hide();
        $('.token-purchased').hide();
    });

    $('.generate-link').click(function () {
        $('.pricing').hide();
        $('.image-purchased').hide();
        $('.token-purchased').hide();
        $('.checkout').hide();
        $('.cart').hide();
        $('.upload-view').hide();
        $('.upload-image').hide();
        $('.landing-page').hide();
        $('.img-brief-result').hide();
        $('.brief-results').hide();
        $('.generate').show();
    });

    $('.pricing-link').click(function () {
        $('.image-purchased').hide();
        $('.token-purchased').hide();
        $('.checkout').hide();
        $('.cart').hide();
        $('.upload-view').hide();
        $('.upload-image').hide();
        $('.landing-page').hide();
        $('.img-brief-result').hide();
        $('.brief-results').hide();
        $('.generate').hide();
        $('.pricing').show();
    });

    $('.custom-link').click(function () {
        $('.pricing').hide();
        $('.image-purchased').hide();
        $('.token-purchased').hide();
        $('.checkout').hide();
        $('.cart').hide();
        $('.upload-view').hide();
        $('.img-brief-result').hide();
        $('.landing-page').hide();
        $('.brief-results').hide();
        $('.generate').hide();
        $('.upload-image').show();
    });

    $('.cart-link').click(function () {
        $('.pricing').hide();
        $('.image-purchased').hide();
        $('.token-purchased').hide();
        $('.checkout').hide();
        $('.upload-view').hide();
        $('.upload-image').hide();
        $('.img-brief-result').hide();
        $('.brief-results').hide();
        $('.generate').hide();
        $('.landing-page').hide();
        $('.cart').show();
        $('div.cart>div.cart-dollars').show();
        $('div.cart>div.cart-credit').hide();
    });

    $('.checkout-btn').click(function () {
        $('.cart').hide();
        if($(this).parent().hasClass("cart-checkout")) {
            $('div.checkout>div.dollar-100>div.total-price').text('$100.0 USD');
            $('#image-purchase-btn').show();
            $('#token-purchase-btn').hide();
        } else if($(this).parent().hasClass("dollars-to-credits")) {
            $('div.checkout>div.dollar-100>div.total-price').text('$550.0 USD');
            $('#image-purchase-btn').show();
            $('#token-purchase-btn').hide();
        } else if($(this).parent().hasClass("checkout-here")) {
            $('div.checkout>div.dollar-100>div.total-price').text('$550.0 USD');
            $('#image-purchase-btn').hide();
            $('#token-purchase-btn').show();
        }
        $('.checkout').show();
    });

    $('#image-purchase-btn').click(function () {
        $('.checkout').hide();
        $('.image-purchased').show();
    });

    $('#token-purchase-btn').click(function () {
        $('.checkout').hide();
        $('.token-purchased').show();
    });

    $('#brief-results-btn').click(function () {
        $('.generate').hide();
        $('.brief-results').show();
    });

    $('#img-added-btn').click(function () {
        $('div.img-brief-result>div.img-brief>div.img-info>div.img-detail').hide();
        $('div.img-brief-result>div.img-brief>div.img-info>div.added-to-cart-img').show();
    });

    $('#generate-another').click(function () {
        $('.img-brief-result').hide();
        $('.generate').show();
    });

    $('#modified-img-btn').click(function () {
        $('div.upload-view>div.uploaded-img>div.uploaded-img-view>div.uploaded-img-btns').hide();
        $('div.upload-view>div.uploaded-img>div.uploaded-img-view>div.cover-bottom-margin').show();
        $('div.upload-view>div.uploaded-img>div.uploaded-img-details').hide();
        $('div.upload-view>div.uploaded-img>div.customised-img-price').show();
    });

    $('#customised-img-added-btn').click(function () {
        $('div.upload-view>div.uploaded-img>div.customised-img-price').hide();
        $('div.upload-view>div.uploaded-img>div.added-to-cart-img').show();
    });

    $('#customise-another').click(function () {
        $('.upload-view').hide();
        $('.upload-image').show();
    });

    $("div.brief-results>div.img-filter>img, div.brief-results>div.img-filter2>img").click(function () {
        $('div.img-brief-result>div.img-brief>div.img-info>div.loaded-img>img').attr('src', $(this).attr('src'));
        $('.brief-results').hide();
        $('.img-brief-result').show();
    });

    $('div.cart>div.cart-dollars>div.cart-checkout>div.cart-total>div.use-credits').click(function () {
        $('div.cart>div.cart-dollars>div.cart-checkout').hide();
        $('div.cart>div.cart-dollars>div.cart-credit-options').css('display', 'grid');
        var credits;
        $('div.cart>div.cart-dollars>div.cart-items>div.cart-item>div.item-detail>div.credit-text').each(function () {
            $(this).parent().children('.price-text').hide();
            credits = $(this).text();
            credits = credits.replace("( ", "");
            credits = credits.replace(" )", "");
            $(this).text(credits);
            $(this).css('margin-top', '1.927vw');
            $(this).css('margin-bottom', '3.333vw');
            $(this).css('font-size', '1.875vw');
            $(this).css('line-height', '1.823vw');
        });
    });

    $('#dollar-to-credit-btn').click(function () {
        $('div.cart>div.cart-dollars>div.cart-credit-options').hide();
        $('div.cart>div.cart-dollars>div.dollars-to-credits').css('display', 'grid');
    });

    $('#buy-credit-btn').click(function () {
        $('div.cart>div.cart-dollars').hide();
        $('div.cart>div.cart-credit').show();
        $('.pricing').hide();
        $('.cart').show();
    });

});

$(document).ready(function () {
    $('.select-dropdown__button').click(function () {
        $('.select-dropdown__list').toggleClass('active');
        $('.select-dropdown__button>.zmdi-chevron-down').toggleClass('rotate-180');
    });

    $('.select-dropdown__list-item').click(function () {
        $('#select-dropdown-text').text('');
        $(this).children().clone().appendTo("#select-dropdown-text");
        $('.select-dropdown__list').toggleClass('active');
    });

    $('.select-dropdown__button').focusout(function () {
        setTimeout(
            function () {
                $('.select-dropdown__list').removeClass('active');
                $('.select-dropdown__button>.zmdi-chevron-down').removeClass('rotate-180');
            }, 100
        );
    });
});


var $fileInput = $('.select-files>input[type="file"]');
var $droparea = $('.drop-files-here');

// highlight drag area
$fileInput.on('dragenter', function () {
    $droparea.addClass('is-active');
});

// back to normal state
$fileInput.on('dragleave blur drop', function () {
    $droparea.removeClass('is-active');
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.upload-image').hide();
            $('.upload-view').show();
            $('div.upload-view>div.uploaded-img>div.uploaded-img-view>img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$fileInput.change(function (){
    readURL(this);
});




