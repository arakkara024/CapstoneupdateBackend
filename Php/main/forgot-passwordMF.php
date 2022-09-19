<?php
    session_start();
    
    if(isset($_POST["email"])){
        $classForgotPassword = new classForgotPassword();
        $classForgotPassword->setEmail($_POST["email"]);
        echo $classForgotPassword->sendVerificationLinktoUpdatepassword();
    }


    class classForgotPassword{
        private $email;

        // Email
        function setEmail($email){
            $this->email = $email;
            // This session $_SESSION["signUpUserEmail"] use for security on php/helper/signup-send-email-verification-codeHF.php
            $_SESSION["forgotPasswordEmail"] =  $this->email;
        }

        function sendVerificationLinktoUpdatepassword(){
            // PAGE Connection on Database 
            require_once("../helper/connectionHF.php");
            // PAGE Random Text Verification Link
            require_once("../helper/forgot-password-random-textHF.php");
            // PAGE PHP MAILER Send Verification Link
            require_once("../helper/forgot-password-send-email-linkHF.php");

            // CLASS Connection on Database
            $classDataBaseConnection = new classDataBaseConnection();
            // CLASS Random Text Verification Link
            $classVerificationLink = new classVerificationLink();
            // Class PHP MAILER send Verification Link
            $classSendLinkUpdatePassword = new classSendLinkUpdatePassword();

            // VARIABLES Verification Link Send
            $verificationLink = $classVerificationLink->verificationLink();

            // Check email exist in user_update_pass_tbl
            $check_email_tbl = mysqli_query($classDataBaseConnection->connect(), "SELECT * FROM user_update_pass_tbl WHERE uupt_email ='$this->email' ");
            $check_email_row = mysqli_num_rows($check_email_tbl); // Get the data on specific row database
            if($check_email_row > 0){  
                $update_verification_link = mysqli_query($classDataBaseConnection->connect(),"UPDATE user_update_pass_tbl SET uupt_verification_link = '$verificationLink' WHERE uupt_email ='$this->email'");
                if($update_verification_link){
                    $classSendLinkUpdatePassword->sendVerificationLinktoUpdatepassword();
                }
            }else{
                echo '
                    <div id="errorContainer" class="error-container-email-verification ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                        <div id="closeBtnError" class="close-btn-email-verification">
                            <h4>X</h4>
                        </div>
                        <div>
                            <span style="font-size:18px;">Email not Found</span> <br>
                        </div>
                    </div>  <!-- End of Error Container -->
                ';
            }
        }
    }

?>