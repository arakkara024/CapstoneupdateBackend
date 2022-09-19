$(document).ready(function () {
    // ID on form signUp
    $('#emailVerifyForm').submit(function(e){
        e.preventDefault();

        // Get the value and put in Variable
        var verificationCode = $('#verificationCode').val();

        $.ajax({
            url: './Php/main/signup-email-verificationMF.php', // Backend Script on signup-email-verificationMF.php
            type: 'POST', // Type POST 
            data: { 
    //  This Area for PHP | THis area for JS
            verificationCode: verificationCode, // use $_POST["code1"] on Backend to get the data of code1
            },
            
            // Displaying the return message on Backend Script on signup-email-verificationMF.php
            success: function (data){
                // console.log(data);
                // This #signUpError will display the result on signup-email-verificationMF.php
                if(data != ""){
                    $('#verifyCodeError').html(data);
                    $('#verifyCodeError').show();
                }
                
            }
        })
    });
    return false;
});
