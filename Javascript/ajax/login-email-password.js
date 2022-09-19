$(document).ready(function () {
    // ID on form signUp
    $('#logInForm').submit(function(e){
        e.preventDefault();

        // Get the value and put in Variable
        var loginEmail = $('#loginEmail').val();
        var loginPassword = $('#loginPassword').val();

        $.ajax({
            url: './Php/main/loginMF.php', // Backend Script on loginMF.php
            type: 'POST', // Type POST 
            data: { email: loginEmail, // use $_POST["email"] on Backend to get the data of email
                    password: loginPassword, // use $_POST["password"] on Backend to get the data of password
            },
            
            // Displaying the return message on Backend Script on loginMF.php
            success: function (data){
                if(data != ""){
                    // This #signUpError will display the result on loginMF.php
                    $('#logInError').html(data);
                    $('#logInError').show();
                }
            }
        })
    });
    return false;
});
