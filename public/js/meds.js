$(document).ready(function(){

    $.get("/user_meds").then(function(data) {

        for (var i = 0; i < data.length; i++) {
            $(".medication").append(`<li>
            <p>Name: ${data[i].name}</p>
            <p>Prescription: ${data[i].type}</p>
            <p>Condition: ${data[i].condition}</p>
            <p>Dose: ${data[i].dose}</p></li>\n`);
        }
    
        console.log(data);
    });
});


// name: req.body.name,
// type: req.body.type,
// condition: req.body.type,
// dose: req.body.type