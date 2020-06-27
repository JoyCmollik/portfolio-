$(document).ready(function () {
    $('#nav-btn').click(function () {
        $('.nav-links').slideToggle(1000);
        $('#nav-btn').toggleClass('change');
    })
})
