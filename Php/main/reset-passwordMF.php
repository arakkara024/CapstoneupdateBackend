<?php
    if((isset($_POST["newPasswordF"])) || (isset($_POST["confirmNewPasswordF"])) || (isset($_POST["verificationLinkKeyF"]))){
        $classUpdatePassword = new classUpdatePassword();
        $classUpdatePassword->setNPNCP($_POST["newPasswordF"],$_POST["confirmNewPasswordF"],$_POST["verificationLinkKeyF"]);
        echo $classUpdatePassword->errorMessageAndUpdatePasswordF();
    }

    // Start of classUpdatePassword
    class classUpdatePassword{
        private $newPassword;
        private $confirmNewPassword;
        private $verificationLinkKey;

        function setNPNCP($newPassword, $confirmNewPassword, $verificationLinkKey) {
            $this->newPassword = $newPassword;
            $this->confirmNewPassword = $confirmNewPassword;
            $this->verificationLinkKey = $verificationLinkKey;
        }

        // Start of errorMessageAndUpdatePasswordF
        function errorMessageAndUpdatePasswordF(){
            // PAGE Connection on Database 
            require_once("../helper/connectionHF.php");
            // PAGE Random Text Verification Link
            require_once("../helper/forgot-password-random-textHF.php");
            // PAGE Forgot Password
            require_once("forgot-passwordMF.php");

            // CLASS Connection on Database 
            $classDataBaseConnection = new classDataBaseConnection();
            // CLASS Random Text Verification Link
            $classVerificationLink = new classVerificationLink();

            // VARIABLES Verification Link Send
            $verificationLink = $classVerificationLink->verificationLink();

            // Start of $_SESSION["forgotPasswordEmail"] Session
            if(isset($_SESSION["forgotPasswordEmail"])){
                $forgotPasswordEmail = $_SESSION["forgotPasswordEmail"];

                // Check the query verification link to database
                $check_verification_key_link_table = mysqli_query($classDataBaseConnection->connect(), "SELECT * FROM user_update_pass_tbl WHERE uupt_verification_link = '$this->verificationLinkKey' ");
                $check_verification_key_link_table_row = mysqli_num_rows($check_verification_key_link_table); // Get the data on specific row database
                
                if($check_verification_key_link_table_row > 0){  

                    if(($this->newPassword != $this->confirmNewPassword) && ((strlen($this->newPassword) < 8) || (strlen($this->confirmNewPassword) < 8))){
                        echo '
                            <div id="errorContainer" class="error-container-email-verification ney-z-index-1 ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                                <div id="closeBtnError" class="close-btn-email-verification">
                                    <h4>X</h4>
                                </div>
                                <div>
                                    <span>Password Not match</span> <br>
                                    <span>Password Must at least 8 characters or more!</span>
                                </div>
                            </div>  <!-- End of Error Container -->
                        ';
                    }else if($this->newPassword != $this->confirmNewPassword){
                        echo '
                            <div id="errorContainer" class="error-container-email-verification ney-z-index-1 ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                                <div id="closeBtnError" class="close-btn-email-verification">
                                    <h4>X</h4>
                                </div>
                                <div>
                                    <span>Password Not match</span> <br>
                                </div>
                            </div>  <!-- End of Error Container -->
                        ';
                    }else if((strlen($this->newPassword ) < 8) || (strlen($this->confirmNewPassword) < 8)){
                        echo '
                            <div id="errorContainer" class="error-container-email-verification ney-z-index-1 ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                                <div id="closeBtnError" class="close-btn-email-verification">
                                    <h4>X</h4>
                                </div>
                                <div>
                                    <span>Password Must at least <br> 8 characters or more!</span>
                                </div>
                            </div>  <!-- End of Error Container -->
                        ';
                    }else{
                        // Update the password
                        //  Query to insert Verification key and use this to update password
                        $query_update = mysqli_query($classDataBaseConnection->connect(),"UPDATE user_accounts_tbl SET uat_password = '$this->newPassword' WHERE uat_email ='$forgotPasswordEmail'");
                        if($query_update){
                            $query_update = mysqli_query($classDataBaseConnection->connect(),"UPDATE user_update_pass_tbl SET uupt_verification_link = '$verificationLink' WHERE uupt_email ='$forgotPasswordEmail'");
                            if($query_update){
                                echo '
                                    <div id="errorContainer" class="error-container-email-verification ney-z-index-1 ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                                        <div id="closeBtnError" class="close-btn-email-verification">
                                            <h4>X</h4>
                                        </div>
                                        <div>
                                            <span style="font-size:18px; color:green;">Successfuly password Update</span>
                                        </div>
                                    </div>  <!-- End of Error Container -->
                                ';
                            }
                        }
                    }
                }
            }// Start of $_SESSION["forgotPasswordEmail"] Session
        } // End of errorMessageAndUpdatePasswordF
    } // End of classUpdatePassword
?>  