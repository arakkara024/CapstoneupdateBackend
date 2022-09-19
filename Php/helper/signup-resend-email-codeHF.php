<?php 
    // MAIL
    require '../api/PHPMailer-master/src/PHPMailer.php';
    require '../api/PHPMailer-master/src/SMTP.php';
    require '../api/PHPMailer-master/src/Exception.php'; 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    // Start of Class
    class classResendCode{
        function resendCodeF(){
            // PAGE Connection on Database 
            require_once("connectionHF.php");
            // PAGE Session email
            require_once("./signupMF.php");
            
            // CLASS Connection on Database 
            $classDataBaseConnection = new classDataBaseConnection();
            
            // Set the session to get the email of user on signup
            if(isset($_SESSION["signUpUserEmail"])){
                $signUpUserEmail = $_SESSION['signUpUserEmail'];

                $query_get_email_code = mysqli_query($classDataBaseConnection->connect(), "SELECT * FROM user_verification_tbl WHERE uvt_email = '$signUpUserEmail' ");
                while($row = mysqli_fetch_assoc($query_get_email_code)){
                    $db_uvt_email_code = $row["uvt_email_code"];

                    $mail = new PHPMailer();

                    //Server settings
                    $mail->isSMTP();                                            //Send using SMTP
                    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
                    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                    $mail->Username   = 'shawngomo@gmail.com';                     //SMTP username
                    $mail->Password   = 'kkgtwyomsvgvpclq';                               //SMTP password
                    $mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
                    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

                    //Recipients
                    $mail->setFrom('shawngomo');
                    $mail->addAddress($signUpUserEmail);              //Add a recipient

                    //Content
                    $mail->isHTML(true);                                  //Set email format to HTML
                    $mail->Subject = 'Verification';

                    $mail->Body = " <strong> $db_uvt_email_code </strong> <br><br>";
                    $mail->AltBody =  " <strong> $db_uvt_email_code </strong> <br><br>";

                    if($mail->send()){
                        echo '
                            <!-- Start of New Verification Code Container -->
                            <div id="errorContainer" class="error-container-email-verification ney-z-index-1 ney-flex ney-flex-fd-c-ai-c-jc-c" style="width: 320px;">
                                <div id="closeBtnError" class="close-btn-email-verification">
                                    <h4>X</h4>
                                </div>
                                <div>
                                    <span style="font-size: 18px; color:green">New Verification Code Already<br> Sent to your Email</span> <br>
                                </div>
                            </div>  <!-- End of New Verification Code Container -->
                        ';
                    }else{
                        echo "Something Went Wrong!";
                    }
                }
            // Throw an error if the signup email is not set for preventing access the verification page
            }else if(!isset($_SESSION["signUpUserEmail"])){
                die("error");
            }
        }
    } // End of Class
?>



