$(document).ready(function(){

    $.get("/user_meds").then(function(data) {

        for (var i = 0; i < data.length; i++) {
            $(".medication").append(`<li>Event: ${data[i].name}Date: ${data[i].date}</li>\n`);
        }
    
        console.log(data);
    });
});


// name: req.body.name,
// type: req.body.type,
// condition: req.body.type,
// dose: req.body.type