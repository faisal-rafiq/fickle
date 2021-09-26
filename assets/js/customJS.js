

$(document).ready(function () {

    $('.landing-page').show();
    $('.generate').hide();
    $('.brief-results').hide();
    $('.img-brief-result').hide();

    $('.logo-img').click(function () {
        $('.img-brief-result').hide();
        $('.brief-results').hide();
        $('.generate').hide();
        $('.landing-page').show();
    });

    $('.generate-link').click(function () {
        $('.img-brief-result').hide();
        $('.landing-page').hide();
        $('.brief-results').hide();
        $('.generate').show();
    });

    $('#brief-results-btn').click(function () {
        $('.img-brief-result').hide();
        $('.landing-page').hide();
        $('.generate').hide();
        $('.brief-results').show();
    });

    $('#img-added-btn').click(function () {
        $('.img-detail').hide();
        $('.added-to-cart-img').show();
    });

    $("div.brief-results>div.img-filter>img, div.brief-results>div.img-filter2>img").click(function () {
        $('div.img-brief-result>div.img-brief>div.img-info>div.loaded-img>img').attr('src', $(this).attr('src'));
        $('.landing-page').hide();
        $('.generate').hide();
        $('.brief-results').hide();
        $('.img-brief-result').show();
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






