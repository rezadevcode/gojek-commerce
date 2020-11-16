

$(document).ready(function () {
    const windowsize = $(window).width();
    const btnShow = $(".btn-outline-secondary");

    btnShow.click(function () {
        $(this).text(" . . . ")
        setTimeout(() => {
            const status = $(this).siblings(".more-info").hasClass('show');
            if (status) {
                $(this).text("Hide Detail")
            } else {
                $(this).text("Show Detail")
            }
        }, 500);
    })
});