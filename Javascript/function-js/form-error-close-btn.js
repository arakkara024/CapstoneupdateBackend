$(document).ready(function(){
    $(document).on('click',"#closeBtnError",function(){
        $("#signUpError").hide();
        $("#verifyCodeError").hide();
        $("#logInError").hide();
        $("#forgotPasswordError").hide();
    });
});