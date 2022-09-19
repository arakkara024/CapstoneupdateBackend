<?php
    // Start the session
    session_start();

    // Get the user input on js/ajax/login-email-password.js
    // Condition if isset then pass the user input to the class of classLoginEmail bellow
    if((isset($_POST["email"])) || (isset($_POST["password"]))){
        // Class 
        $classLogin = new classLogin();
        $classLogin->setEP($_POST["email"],$_POST['password']);
        // Putting an Echo for displaying an Error
        echo $classLogin->verifyPassword();
        // For saving the user input if the user didn't commit wrong on fill up form
        // $classLoginEmail->saveSignUpF();
    }

    // Start of classSignUp
    class classLogin{
        // Properties
        private $email;
        private $password;

        // Method
        function setEP($email, $password){
            $this->email = $email;
            $this->password = $password;
        }

        function verifyPassword(){
            // PAGE Connection on Database 
            require_once("../helper/connectionHF.php");

            // CLASS Connection on Database 
            $classDataBaseConnection = new classDataBaseConnection();

            // This table for user_accounts_table
            $check_email_table = mysqli_query($classDataBaseConnection->connect(), "SELECT * FROM user_accounts_tbl WHERE uat_email ='$this->email'");
            $check_email_row = mysqli_num_rows($check_email_table); // Get the data on specific row database

            // If email exist on user_accounts_table. Goods to fetch the password on database and match on the user input
            if($check_email_row > 0){
                $check_email = mysqli_query($classDataBaseConnection->connect(), "SELECT * FROM user_accounts_tbl WHERE uat_email = '$this->email'");
                while($row = mysqli_fetch_assoc($check_email)){
                    $uat_id = $row["uat_id"];
                    $uat_password = $row["uat_password"];

                    // Session
                    $_SESSION["uat_id"] = $uat_id;

                    if($uat_password == $this->password){
                            echo "<script>window.location.href='menu';</script>";
                    // Input user password and password in data base not match generate Error
                    }else{
                        echo '
                            <!-- Start of Error Container -->
                            <div id="errorContainer" class="error-container-email-verification ney-z-index-1 ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                                <div id="closeBtnError" class="close-btn-email-verification">
                                    <h4>X</h4>
                                </div>
                                <div>
                                    <span style="font-size:18px">Password is Incorrect</span> <br>
                                </div>
                            </div>  <!-- End of Error Container -->
                        ';
                    }
                } // End of While 
            }else{
                echo '
                    <!-- Start of Error Container -->
                    <div id="errorContainer" class="error-container-email-verification ney-z-index-1 ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                        <div id="closeBtnError" class="close-btn-email-verification">
                            <h4>X</h4>
                        </div>
                        <div>
                            <span style="font-size:18px">Account Not Found</span> <br>
                        </div>
                    </div>  <!-- End of Error Container -->
                ';
            }
        }
    }

?>