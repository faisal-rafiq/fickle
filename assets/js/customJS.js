$(document).ready(function(){
    $('.landing-page').shpw();
    $('.generate').hide();
    $('.brief-result').hide();

    $('.logo-img').on('click',function(){
        $('.brief-result').hide();
        $('.generate').hide();
        $('.landing-page').show();
    });

    $('.generate-link').on('click',function(){
        $('.landing-page').hide();
        $('.brief-result').hide();
        $('.generate').show();
    });

    $('#brief-result-btn').on('click',function(){
        $('.landing-page').hide();
        $('.generate').hide();
        $('.brief-result').show();
    });



});