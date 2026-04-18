$("#contactForm").on("submit", function(event) {
    event.preventDefault();

    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var order = $("#order").val().trim();
    var message = $("#message").val().trim();

    if (!name || !phone || !order || !message) {
        formError();
        submitMSG(false, "Completa nombre, telefono, pedido y mensaje para continuar.");
        return;
    }

    formSuccess();
});

function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Tu solicitud quedo lista. Te contactaremos para confirmar el pedido.");
}

function formError() {
    $("#contactForm").removeClass().addClass("shake animated").one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
            $(this).removeClass();
        }
    );
}

function submitMSG(valid, msg) {
    var msgClasses = valid
        ? "h3 text-center tada animated text-success"
        : "h3 text-center text-danger";

    $("#msgSubmit")
        .removeClass("hidden")
        .attr("class", msgClasses)
        .text(msg);
}
