

$(document).ready(function () {
    $(".selection").select2({
        minimumResultsForSearch: Infinity
    });

    // hide default select2 arrow down
    $('b[role="presentation"]').hide();

    let total = parseInt($("#totalnum").text());
    $("#minus").click(function() {
        total > 0 ? total-- : null;
        $("#totalnum").text(total)
    })
    $("#plus").click(function() {
        total++
        $("#totalnum").text(total)
    })

    /** Swiper JS Config - Recommendation Section */
    new Swiper('.swiper-recommendation', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
    });

    /** Smooth Product Viewer Plugin - Initiate & Customize */
    $('.sp-wrap').smoothproducts();
    $( "<div class='sub-thumbs'></div>" ).appendTo( ".sp-thumbs" ); // create sub wrapper element
    $(".sp-thumbs a").detach().appendTo(".sub-thumbs"); // move child element into new wrapper
});