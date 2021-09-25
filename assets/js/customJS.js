$(document).ready(function(){
    $('.landing-page').hide();
    $('.generate').hide();
    $('.generate').hide();


    $('#generate-link').on('click',function(){
        $('.landing-page').hide();
        $('.generate').show();
    });


});