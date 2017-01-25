$(function() {
    var alertButton = $("#alertMe");
    alertButton.click(function(e) {
        e.preventDefault();
        var successAlert = $("#success-alert");
        successAlert.slideToggle();
    })

});
