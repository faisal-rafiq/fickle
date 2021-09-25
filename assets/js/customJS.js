$(document).ready(function(){

    $('.landing-page').show();
    $('.generate').hide();
    $('.brief-result').hide();

    $('.logo-img').click(function(){
        $('.brief-result').hide();
        $('.generate').hide();
        $('.landing-page').show();
    });

    $('.generate-link').click(function(){
        $('.landing-page').hide();
        $('.brief-result').hide();
        $('.generate').show();
    });

    $('#brief-result-btn').click(function(){
        $('.landing-page').hide();
        $('.generate').hide();
        $('.brief-result').show();
    });

});