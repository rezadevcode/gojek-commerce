

$(document).ready(function () {

    /** Swiper JS Config - Recommendation Section */
    new Swiper('.swiper-recommendation', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
    });

    /** config operator */
    let total = parseInt($("#totalnum.samsung").text());
    $("#minus").click(function() {
        total > 0 ? total-- : null;
        $("#totalnum.samsung").text(total)
    })
    $("#plus").click(function() {
        total++
        $("#totalnum.samsung").text(total)
    })

});