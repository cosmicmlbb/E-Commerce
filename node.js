$(document).ready(function() {
    $("#show-register-link").click(function(event) {
        event.preventDefault();
        $("#login-form").hide();
        $("#register-form").show();
    });

    $("#show-login-link").click(function(event) {
        event.preventDefault();
        $("#register-form").hide();
        $("#login-form").show();
    });
});