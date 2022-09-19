<?php
    class classEmailChecker{
        private $email;

        function __construct($email){
            $this->email = $email;
        }

        function __destruct(){
            $explode = explode("@",$this->email);
            if(($explode[1] != "gmail.com") && ($explode[1] != "yahoo.com") && ($explode[1] != "outlook.com") && ($explode[1] != "aol.com") && ($explode[1] != "mail.com") && ($explode[1] != "proton.com")  && ($explode[1] != "zohomail.com")){
                echo '
                    <span>Please Use respected Email Provider</span> <br>
                ';
            }
        }
    }
?>