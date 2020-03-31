function validate() {
    document.getElementById("send").disabled = !!!document.getElementById("email-form").checkValidity();
}

function sendEmail() {
    var loader = document.getElementById("loader");
    loader.hidden = false;
    performFakeCall();

    function performFakeCall() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { resolve() }, 2000);
        })
    }

    performFakeCall().then(function (result) {
        loader.hidden = true;
        document.getElementById("email-form").reset();
    });
}