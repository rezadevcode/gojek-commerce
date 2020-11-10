

$(document).ready(function () {
    const windowsize = $(window).width();

    $(".selection").select2({
        minimumResultsForSearch: Infinity
    });


    if (windowsize < 768) {
        $("#sorting").select2({
            minimumResultsForSearch: Infinity,
            placeholder: "Sorting"
        });
        $("#menu-category").select2({
            minimumResultsForSearch: Infinity,
            placeholder: "All Gadget"
        });
    }

    // hide default select2 arrow down
    $('b[role="presentation"]').hide();
});