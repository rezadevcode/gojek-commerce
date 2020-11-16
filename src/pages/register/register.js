/** REGISTER SCRIPT */

$(document).ready(function () {

    $(".selection").select2({
        minimumResultsForSearch: Infinity,
    });

    // hide default select2 arrow down
    $('b[role="presentation"]').hide();

    // adjust arrow icon when select2 opened
    $('.selection').on('select2:open', function (e) {
        const icon = $(this).parents('.form-group').find('.fas');
        icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
    });
    $('.selection').on('select2:close', function (e) {
        const icon = $(this).parents('.form-group').find('.fas');
        icon.removeClass('fa-chevron-up').addClass('fa-chevron-down')
    });

    // config jquery form validate
    $("#register-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            fullname: {
                required: true,
                minlength: 3,
                maxlength: 100
            }
        },
        submitHandler: function(form) {
            alert('form submitted');
            // form.submit();
        }
    });

});