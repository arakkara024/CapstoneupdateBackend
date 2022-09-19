<?php
    // Class
    class classErrorPage{
        // Method

        /*
            Unauthorize acces go to 404 page email-verification.php
        */
        function signUpEmailVerification(){
            // PAGE Session email
            require_once("./Php/main/signupMF.php");

            if(!isset($_SESSION["signUpUserEmail"])){
                echo "<script>window.location.href='404';</script>";
            }
        }

        /*
            Reset Password Error reset-password.php
        */
        function resetPassword(){
            // PAGE Connection on Database 
            require_once("connectionHF.php");
            // PAGE Forgot Password
            require_once("./Php/main/forgot-passwordMF.php");

            // CLASS Connection on Database 
            $classDataBaseConnection = new classDataBaseConnection();

            // Get the query verification link on the url
            $verificationKeyLink = htmlspecialchars($_GET["verification-key-link"]);

            $check_verification_key_link_table = mysqli_query($classDataBaseConnection->connect(), "SELECT * FROM user_update_pass_tbl WHERE uupt_verification_link = '$verificationKeyLink' ");
            $check_verification_key_link_table_row = mysqli_num_rows($check_verification_key_link_table); // Get the data on specific row database
            
            if($check_verification_key_link_table_row <= 0){  
                echo "<script>window.location.href='404';</script>";
            }else if(!isset($_SESSION["forgotPasswordEmail"])){
                echo "<script>window.location.href='404';</script>";
            }
        }
    }
?>