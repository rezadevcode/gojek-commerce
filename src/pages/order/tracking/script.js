

$(document).ready(function () {

    const btnShow = $(".btn-outline-secondary");
    btnShow.click(function () {
        $(this).text(" . . . ")
        setTimeout(() => {
            const status = $(this).parent().siblings(".detail-status").hasClass('show');
            if (status) {
                $(this).text("Hide Detail")
            } else {
                $(this).text("Show Detail")
            }
        }, 500);
    })

});