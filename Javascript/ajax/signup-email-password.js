$(document).ready(function () {
    // ID on form signUp
    $('#signUpregisterForm').submit(function(e){
        e.preventDefault();

        // Get the value and put in Variable
        var signUpEmail = $('#signUpemail').val();
        var signUpPassword = $('#signUpPassword').val();
        var signUpConfirmPassword = $('#signupConfirmPassword').val();

        // Show the loader
        $("#signUploader").show();
        // Hide the signUpSubmit btn
        $("#signUpSubmit").hide();

        $.ajax({
            url: './Php/main/signupMF.php', // Backend Script on signupF.php
            type: 'POST', // Type POST 
            data: { email: signUpEmail, // use $_POST["email"] on Backend to get the data of email
                    password: signUpPassword, // use $_POST["password"] on Backend to get the data of password
                    confirmPassword: signUpConfirmPassword, // use $_POST["confirmPassword"] on Backend to get the data of confirmPassword
            },
            
            // Displaying the return message on Backend Script on signupF.php
            success: function (data){
                // This #signUpError will display the result on signupF.php
                $('#signUpError').html(data);
                
                // If the backend throw an error then hide the loader
                // Show the submit Btn
                if((data != "")){
                    $("#signUploader").hide();
                    $("#signUpSubmit").show();
                    $("#signUpError").show();
                // Else the backend is success then disable the submit btn
                }
            }
        })
    });
    return false;
});
