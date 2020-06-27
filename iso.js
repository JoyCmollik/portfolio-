$(document).ready(function () {
    var $grid = $('.picture-container').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    //image loaded
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });
})
