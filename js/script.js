$(function () {

    $('.btn-menu').on('click', function () {
        // click했을때 이부분이 실행된다.
        // $('nav').show();
        $('nav').toggle();
    })


    $('.visual .text a').on('click', function () {
        // $('#popup').show();
        $('#popup').css('display', 'flex');
    })

    $('#popup').on('click', function () {
        $('#popup').hide();
    })






})
