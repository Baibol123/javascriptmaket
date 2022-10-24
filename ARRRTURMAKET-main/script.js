$(document).ready(function()  {
    $('.button-1').click(function () {
        $('.jquery_popup').toggleClass('.open')
        $('body').toggleClass('.lock')
    })
    $('.exit').click(function () {
        $('.jquery_popup').toggleClass('.open')
        $('body').toggleClass('.lock')
    });
});