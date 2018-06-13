$(document).ready(function() {
// Getting references to our form and inputs
    var apptForm = $("form.appt");
    var dateInput = $("input#apptDate");
    var timeInput = $("input#apptTime");
    var typeInput = $("input#apptType");
    var reasonInput = $("input#apptReason");

    apptForm.on("submit", function(event) {
        event.preventDefault();
        console.log("working");

        var userData = {    
            date: dateInput.val().trim(),
            time: timeInput.val().trim(),
            type: typeInput.val().trim(),
            reason: reasonInput.val().trim()
        };

        addAppt(userData);
    
        dateInput.val("");
        timeInput.val("");
        typeInput.val("");
        reasonInput.val("");

    });

    function addAppt(obj) {
        $.post("/create_appt", obj, function() {

        }).then(function(data) {
            // window.location.replace(data);
            window.location.href = '/home';

            // If there's an error, log the error
        }).catch(function(err) {
            console.log(err);
        });
    }
});