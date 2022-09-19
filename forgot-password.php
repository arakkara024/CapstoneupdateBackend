<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>

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
            <div id="forgotPasswordError" class="ney-z-index-1"></div>

            <form id="forgotPasswordForm">
                <div class="ney-child-container ney-flex ney-flex-fd-c-ai-c ney-form-input-container">
                    <!-- Title Container -->
                    <div class="title-container">
                        <h4 class="ney-text-color-black">Forgot Password</h4>
                    </div>

                    <!-- Email -->
                    <input class="ney-form-input-text" type="email" id="forgotPasswordEmail" placeholder="Email" required>
                    
                    <!-- Loader -->
                    <div id="forgotPasswordLoader" class="ney-flex ney-flex-ai-c ney-margin-tb-8" style="display: none;">
                        <div class="ney-loader"></div>
                        <span class="ney-margin-l-4" style="color:black"><b>Loading...</b></span>
                    </div>

                    <!-- Submit -->
                    <div class="btn-container">
                        <input class="ney-btn ney-text-size-xlarge" type="submit" id="forgotPasswordBtn" value="Submit">
                    </div>
                    
                    <div class="nav-form">
                        <a class="ney-text-color-black ney-text-size-small" href="login">Back to Login</a> <br>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- Start Login Container-->
    <script src="./Javascript/function-js/form-error-close-btn.js"></script>

    <!-- Ajax Js -->
    <script src="./Javascript/ajax/forgot-password-email.js"></script>
</body>
</html>