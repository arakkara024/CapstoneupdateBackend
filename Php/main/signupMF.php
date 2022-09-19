<?php
    session_start();

    // Get the user input on js/ajax/signup-email-password.js
    // Condition if isset then pass the user input to the class of classSignUpF bellow
    if( isset($_POST["email"]) || isset($_POST["password"]) || isset($_POST["confirmPassword"]) ){
        // Class 
        $classSignUpF = new classSignUpF();
        $classSignUpF->setEPCP($_POST["email"],$_POST['password'],$_POST['confirmPassword']);
        // Putting an Echo for displaying an Error
        echo $classSignUpF->getErrorSignUpF();
        // For saving the user input if the user didn't commit wrong on fill up form
        $classSignUpF->saveSignUpF();
    }

    // Start of Class
    class classSignUpF{
        // PROPERTIES
        protected $email;
        protected $password;
        protected $confirmPassword;

        // METHODS
        // Set the Email, Password and Confirm Password
        function setEPCP($email,$password,$confirmPassword){
            $this->email = $email;
            $this->password = $password;
            $this->confirmPassword = $confirmPassword;
            // This session $_SESSION["signUpUserEmail"] use for security on php/helper/signup-send-email-verification-codeHF.php
            $_SESSION["signUpUserEmail"] =  $this->email;
        }

        // Start of All Error on signup form
        function getErrorSignUpF(){
            // PAGE Connection on Database 
            require_once("../helper/connectionHF.php");
            // PAGE Email Check Dummy Email
            require_once("../helper/email-checkerHF.php");

            // CLASS Connection on Database 
            $classDataBaseConnection = new classDataBaseConnection();

            // This table for user_accounts_tbl
            // Check if the Email is already Registered on user_accounts_tbl throw Error EMAIL IS ALREADY EXIST
            $check_email_table = mysqli_query($classDataBaseConnection->connect(), "SELECT * FROM user_accounts_tbl WHERE uat_email ='$this->email'");
            $check_email_row = mysqli_num_rows($check_email_table); // Get the data on specific row database

            // Email is already Registered | Password Not Match | Password is Less than 8 Characters Error
            if(($check_email_row > 0) && ($this->password != $this->confirmPassword) && (strlen($this->password) < 8) && (strlen($this->confirmPassword) < 8) ){
                echo '
                    <!-- Start of Error Container -->
                    <div id="errorContainer" class="error-container-sign-up ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                        <div id="closeBtnError" class="close-btn-container-signup">
                            <h4>X</h4>
                        </div>
                        <div>
                            <span>Password Not Match</span> <br>
                            <span>Email is already registered</span> <br>
                            <span>Password must at least 8 characters or more!</span>
                        </div>
                    </div>  <!-- End of Error Container -->
                ';
            }

            // Email is already Registered | Password is Less than 8 Characters Error
            else if(($check_email_row > 0) && (strlen($this->password) < 8) && (strlen($this->confirmPassword) < 8) ){
                echo '
                    <!-- Start of Error Container -->
                    <div id="errorContainer" class="error-container-sign-up ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                        <div id="closeBtnError" class="close-btn-container-signup">
                            <h4>X</h4>
                        </div>
                        <div>
                            <span>Email is already registered</span> <br>
                            <span>Password Must be at least <br> 8 Characters or more</span> <br>
                        </div>
                    </div>  <!-- End of Error Container -->
                ';
            }

            //Password Not Match | Password is Less than 8 Characters Error
            else if(($this->password != $this->confirmPassword) && (strlen($this->password) < 8) && (strlen($this->confirmPassword) < 8) ){
                echo '
                    <!-- Start of Error Container -->
                    <div id="errorContainer" class="error-container-sign-up ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                        <div id="closeBtnError" class="close-btn-container-signup">
                            <h4>X</h4>
                        </div>
                        <div>
                            <span>Password Not Match</span> <br>
                            <span>Password Must be at least <br> 8 Characters or more</span> <br>
                        </div>
                    </div>  <!-- End of Error Container -->
                ';
            }

            // Email Exist Error
            else if($check_email_row > 0){
                echo '
                    <!-- Start of Error Container -->
                    <div id="errorContainer" class="error-container-sign-up ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                        <div id="closeBtnError" class="close-btn-container-signup">
                            <h4>X</h4>
                        </div>
                        <div>
                            <span style="font-size:18px">Email is already registered</span> <br>
                        </div>
                    </div>  <!-- End of Error Container -->
                ';
            }

            // Password not Match Error
            else if($this->password != $this->confirmPassword){
                echo '
                    <!-- Start of Error Container -->
                    <div id="errorContainer" class="error-container-sign-up ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                        <div id="closeBtnError" class="close-btn-container-signup">
                            <h4>X</h4>
                        </div>
                        <div>
                            <span style="font-size:18px">Password Not Match</span> <br>
                        </div>
                    </div>  <!-- End of Error Container -->
                ';
            }

            // Password Less than 8 Characters Error
            else if((strlen($this->password) <= 8) || (strlen($this->confirmPassword) <= 8)){
                echo '
                    <!-- Start of Error Container -->
                    <div id="errorContainer" class="error-container-sign-up ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                        <div id="closeBtnError" class="close-btn-container-signup">
                            <h4>X</h4>
                        </div>
                        <div>
                            <span style="font-size:18px">Password Must be at least <br> 8 Characters or more</span> <br>
                        </div>
                    </div>  <!-- End of Error Container -->
                ';
            } 

            // Email Checker Fake Error
            // $classEmailChecker = new classEmailChecker($this->email);
        } // End of All Error on signup form

        // Start of Save on data base the info
        function saveSignUpF(){
            // PAGE Connection on Database 
            require_once("../helper/connectionHF.php");
            // PAGE Random 6 Digit Code
            require_once("../helper/six-digit-codeHF.php");
            // PAGE Date and Time
            require_once("../helper/date-and-timeHF.php");
            // PAGE Email Send
            require_once("../helper/signup-send-email-codeHF.php");

            // CLASS Connection on Database 
            $classDataBaseConnection = new classDataBaseConnection();
            // CLASS Date and Time
            $classDateAndTime = new classDateAndTime();
            // CLASS Six Digit Random Number
            $classSixDigitCode = new classSixDigitCode();
            // CLASS Email Senc Verification Code
            $classSendVerificationCodeOnEmail = new classSendVerificationCodeOnEmail();

            // VARIABLES Six Digit Code
            $sixDigitRandomCode = $classSixDigitCode->sixDigitCodeF();
            // VARIABLES Time Now
            $timeRegister = $classDateAndTime->timeNowF();
            // VARIABLES Date Now
            $dateRegister = $classDateAndTime->dateNowF();

            // This table for user_accounts_table
            // Check if the Email is already Registered on user_accounts_tbl for correction
            $check_email_table = mysqli_query($classDataBaseConnection->connect(), "SELECT * FROM user_accounts_tbl WHERE uat_email ='$this->email'");
            $check_email_row = mysqli_num_rows($check_email_table); // Get the data on specific row database

            // User Input correct details with out an error
            if(($check_email_row <= 0) && ($this->password == $this->confirmPassword) && (strlen($this->password) > 8) && (strlen($this->confirmPassword) > 8) ){
                
                // Check the Email again if exist on user_verification_tbl then check if not verified. The email is not verified automatic it will redirect to the signup-verification-email.php to verified the email
                $check_email_table = mysqli_query($classDataBaseConnection->connect(), "SELECT * FROM user_verification_tbl WHERE uvt_email ='$this->email'");
                $check_email_table_row = mysqli_num_rows($check_email_table); // Get the data on specific row database
                
                // Check if the Email is already Registered but the user didnt verified just update the verification code email and go to the signup-verification-email.php page to verified the email
                if($check_email_table_row > 0){
                    $check_email = mysqli_query($classDataBaseConnection->connect(), "SELECT * FROM user_verification_tbl WHERE uvt_email = '$this->email' ");
                    while($row = mysqli_fetch_assoc($check_email)){
                        // Get the code in put in $db_evsut_email_code
                        $db_uvt_verified = $row["uvt_verified"];
                        
                        if($db_uvt_verified == 0){
                            $query_update = mysqli_query($classDataBaseConnection->connect(),"UPDATE user_verification_tbl SET uvt_email_code = '$sixDigitRandomCode' WHERE uvt_email ='$this->email'");
                            if($query_update){
                                // Send the Code now | Inside of the function the page where it go after sending a verification code on email
                                $classSendVerificationCodeOnEmail->sendSixDigitCodeOnEmailF();
                            }
                        }
                    }
                }else{
                    // Insert Data to email_phone_verification_sign_up_table
                    $query_insert = mysqli_query($classDataBaseConnection->connect(),"INSERT INTO user_verification_tbl (uvt_email, uvt_password, uvt_email_code, uvt_create_time, uvt_create_date) VALUES  ('$this->email', '$this->password', '$sixDigitRandomCode' , '$timeRegister','$dateRegister')");
                    if($query_insert){
                        // Send the Code now | Inside of the function the page where it go after sending a verification code on email
                        $classSendVerificationCodeOnEmail->sendSixDigitCodeOnEmailF();
                    }
                }
            }
        } // End of Save on data base the info

    } // End of Class
?>