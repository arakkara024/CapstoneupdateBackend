<?php
    require_once("./Php/helper/error-pageHF.php");
    $classErrorPage = new classErrorPage();

    $classErrorPage->resetPassword();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Password</title>

    <!-- Css -->
    <link rel="stylesheet" href="./Css/scss/style.css">

    <!-- Jquery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>

    <!-- Rotate Phone -->
    <div class="phone-container ney-flex ney-flex-fd-c-ai-c-jc-c ney-z-index-3">
        <div class="phone"></div> <br>
        <div><p>Please Rotate your Phone</p></div>
    </div>

    <!-- Start Login Container-->
    <div class="background-body-container ney-flex ney-flex-ai-c-jc-c">
        <div class="ney-form ney-flex ney-flex-fd-c-ai-c ney-parent-container">
            <div id="resetPasswordError"></div>

            <form id="resetPasswordForm">
                <div class="ney-child-container ney-flex ney-flex-fd-c-ai-c ney-margin-t-16 ney-form-input-container">
                    <!-- Title Container -->
                    <div class="title-container">
                        <h4 class="ney-text-color-black">Update Password</h4>
                    </div>

                    <!-- New Password -->
                    <input class="ney-form-input-text" type="password" id="newResetPassword" placeholder="New Password" required>

                    <!-- Confirm New Password -->
                    <input class="ney-form-input-text" type="password" id="confirmNewResetPassword" placeholder="Confirm Password" required>
                    
                    <!-- Submit -->
                    <div class="btn-container ney-text-center">
                        <input class="ney-btn ney-text-size-xlarge" type="submit" id="updatePasswordBtn" value="Submit">
                    </div>
                    
                    <div class="nav-form">
                        <a class="ney-text-color-black ney-text-size-small" href="login">Back to Login</a> <br>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- Start Login Container-->

    <!-- Function -->
    <script src="./Javascript/function-js/form-error-close-btn.js"></script>

    <!-- Ajax -->
    <script src="./Javascript/ajax/reset-password.js"></script>
</body>
</html>