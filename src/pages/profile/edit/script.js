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


    // config jquery each form validate
    $('form').each(function() {
        $(this).validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                spv_email: {
                    email: true
                },
                pv_email: {
                    email: true
                },
                manager_email: {
                    email: true
                },
                supervisor_email: {
                    email: true
                },
                fullname: {
                    required: true,
                    minlength: 3,
                    maxlength: 100
                }
            }
        });
    });

    $('#submitForm').click(function() {
        let valid = [];
        $('form').each(function() {
            valid.push($(this).valid());
        });

        const stillInvalid = valid.includes(false);
        if (!stillInvalid) {
            alert('form has been submitted!')
            window.location.replace("/src/pages/profile/main/index.html");
        }
    });

});