$(function() {
    var types=['Työnhakemus', 'Yhteistyökumppanuus/Sponsorointi', '', 'Projektiehdotus', 'Yleinen'];
    $('#contact .services-actions .col-md-3').click(function() {
        if(!$(this).hasClass('selected')) {
            $('#contact .services-actions .col-md-3').removeClass('selected');
            $('#contact .services-actions').addClass('contact-started');
            $(this).addClass('selected');

            $('#contactform_contact_type').val(types[$(this).index()]);

            $('.formrowcontainer').css({ 'height' : ($('.formrow').height()), 'margin-top':"100px"});
            $('.formrow').slideUp({duration:400,easing:"easeInOutExpo",complete: function() {
                $(this).slideDown(400);
            }
            });
        }
    });

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault();
            var name = $("#contactform_contact_name").val();
            var email = $("#contactform_contact_email").val();
            var phone = $("#contactform_contact_phone").val();
            var message = $("#contactform_contact_msg").val();
            var type = $("#contactform_contact_type").val();
            var csrft = $("#authtoken").val();
            $.ajax({
                url: "../contactforms",
                type: "POST",
                data: {
                    "contactform[contact_type]": type,
                    "contactform[contact_name]": name,
                    "contactform[contact_phone]": phone,
                    "contactform[contact_email]": email,
                    "contactform[contact_msg]": message,
                    "authenticity_token": csrft
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
