$(document).ready(function () {
    
    // ID on form Reset Password
    $('#resetPasswordForm').submit(function(e){
        e.preventDefault();

        var newPassword = $('#newResetPassword').val();
        var confirmNewPassword = $('#confirmNewResetPassword').val();

        var urlParams = new URLSearchParams(window.location.search);
        var verificationKeyLink = urlParams.get('verification-key-link');

        $.ajax({
            url: './Php/main/reset-passwordMF.php', // Backend Script on reset-passwordMF.php
            type: 'POST', // Type POST 
            data: { 
                newPasswordF: newPassword, // use $_POST["newPassword"] on Backend to get the data of email
                confirmNewPasswordF: confirmNewPassword, // use $_POST["confirmNewPassword"] on Backend to get the data of email
                verificationLinkKeyF: verificationKeyLink, // use $_POST["verificationKeyLink"] on Backend to get the data of email
            },
            
            // Displaying the return message on Backend Script on reset-passwordMF.php
            success: function (data){
                if((data != "")){
                    $('#resetPasswordError').html(data);
                }
            }
        })
    });
    return false;
});
