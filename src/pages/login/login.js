/** LOGIN SCRIPT */

$(document).ready(function () {

    $("#loginForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        submitHandler: function(form) {
            alert('form submitted');
            // form.submit();
        }
    });

});