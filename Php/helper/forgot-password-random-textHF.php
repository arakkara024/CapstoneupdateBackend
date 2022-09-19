<?php
    class classVerificationLink{
        function verificationLink(){
            $verificationKeyInsertPasswordLink = "";
            $verificationKeyInsertPassLink = md5(time() .$verificationKeyInsertPasswordLink);
            return $verificationKeyInsertPassLink;
        }
    }

?>