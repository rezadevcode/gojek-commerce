

$(document).ready(function () {

    $(".selection").select2({
        minimumResultsForSearch: Infinity,
    });

    // hide default select2 arrow down
    $('b[role="presentation"]').hide();
});