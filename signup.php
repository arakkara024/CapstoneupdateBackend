<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>

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
        <!-- Start of Parent Form COntainer -->
        <div class="ney-form ney-flex ney-flex-fd-c-ai-c ney-parent-container">
            <!-- Error Container -->
            <div id="signUpError" class="ney-z-index-1"></div>
            
            <!-- Start of Child Form Container -->
            <form id="signUpregisterForm" class="ney-child-container ney-flex ney-flex-fd-c-ai-c ney-form-input-container">
                <!-- Title Form Container -->
                <div class="title-container">
                    <h4 class="ney-text-color-black ney-text-size-large">Sign Up</h4>
                </div>
                
                <!-- Email -->
                <input class="ney-form-input-text" type="email"  id="signUpemail" placeholder="Email" required>
                
                <!-- Password -->
                <input class="ney-form-input-text" type="password" id="signUpPassword" placeholder="Password" required>
                
                <!-- Confirm Password -->
                <input class="ney-form-input-text" type="password"  id="signupConfirmPassword" placeholder="Confirm Password" required>
                
                <!-- Loader -->
                <div id="signUploader" class="ney-flex ney-flex-ai-c ney-margin-tb-8" style="display: none;">
                    <div class="ney-loader"></div>
                    <span class="ney-margin-l-4" style="color:black"><b>Loading...</b></span>
                </div>

                <!-- Submit -->
                <div class="btn-container">
                    <input class="ney-btn ney-text-size-xlarge" type="submit" id="signUpSubmit">
                </div>

                <!-- Nav Links Container -->
                <div class="nav-form">
                    <a class="ney-text-color-black ney-text-size-small" href="login">Already Have an account? Log In</a> <br>
                    <a class="ney-text-color-black ney-text-size-small" href="forgot-password">Forgot Password</a>
                </div>
            </form> <!-- End of Child Form Container -->
        </div> <!-- End of Parent Form COntainer -->
    </div> <!-- End Login Container-->

    <!-- Function Js -->
    <script src="./Javascript/function-js/form-error-close-btn.js"></script>

    <!-- Ajax Js -->
    <script src="./Javascript/ajax/signup-email-password.js"></script>
</body>
</html>