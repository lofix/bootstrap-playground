$(function() {
    var alertButton = $("#alertMe");
    alertButton.click(function(e) {
        e.preventDefault();
        var successAlert = $("#success-alert");
        successAlert.slideToggle();
    });

    $("a.pop").click(function(e) {
        e.preventDefault();
    });
    $("a.pop").popover();
    $('[rel="tooltip"]').tooltip();
});
