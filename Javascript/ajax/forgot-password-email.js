$(document).ready(function () {
    // ID on form signUp
    $('#forgotPasswordForm').submit(function(e){
        e.preventDefault();

        // Get the value and put in Variable
        var forgotPasswordEmail = $('#forgotPasswordEmail').val();

        // Show the loader
        $("#forgotPasswordLoader").show();
        // Hide the forgotPassword btn
        $("#forgotPasswordBtn").hide();

        $.ajax({
            url: './Php/main/forgot-passwordMF.php', // Backend Script on forgot-passwordMF.php
            type: 'POST', // Type POST 
            data: { 
                email: forgotPasswordEmail, // use $_POST["email"] on Backend to get the data of email
            },
            
            // Displaying the return message on Backend Script on forgot-passwordMF.php
            success: function (data){
                $('#forgotPasswordError').html(data);
                if((data != "")){
                    $("#forgotPasswordLoader").hide();
                    $("#forgotPasswordBtn").show();
                    $('#forgotPasswordError').show();
                }
            }
        })
    });
    return false;
});
