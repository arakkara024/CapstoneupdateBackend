<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In</title>

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
            <!-- Error Container -->
            <div id="logInError" class="ney-z-index-1"></div>

            <div class="ney-child-container ney-flex ney-flex-fd-c-ai-c ney-margin-t-16 ney-form-input-container">
                <!-- Title Container -->
                <div class="title-container">
                    <h4 class="ney-text-color-black">Log In</h4>
                </div>

                <form id="logInForm">
                    <!-- Email -->
                    <input class="ney-form-input-text" type="email" id="loginEmail" placeholder="Email" required>
                    
                    <!-- Password -->
                    <input class="ney-form-input-text" type="password" id="loginPassword" placeholder="Password" required>

                    <!-- Submit -->
                    <div class="btn-container ney-text-center">
                        <input class="ney-btn ney-text-size-xlarge" type="submit" value="Log In" >
                    </div>
                </form>

                <div class="nav-form">
                    <a class="ney-text-color-black ney-text-size-small" href="signup">Don't Have an account? Sign Up</a> <br>
                    <a class="ney-text-color-black ney-text-size-small" href="forgot-password">Forgot Password</a>
                </div>
            </div>
        </div>
    </div><!-- End Login Container-->

    <!-- Function -->
    <script src="./Javascript/function-js/form-error-close-btn.js"></script>

    <!-- Ajax -->
    <script src="./Javascript/ajax/login-email-password.js"></script>
</body>
</html>