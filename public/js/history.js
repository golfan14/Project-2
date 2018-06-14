var eventInput = $("#event");
var dateInput = $("#date");

$(hobForm).on("submit", function postBodyHistory(event){
    event.preventDefault();
    
    if (!eventInput.val().trim() || !dateInput.val().trim()) {
        reutrn;
    }
    var newPost= {
        event: eventInput.val().trim(),
        date: dateInput.val().trim()
    };
    console.log(newPost)

    if (updating){
        newPost.id = postId;
        updatePost(newPost);
    }else {
        submitPost(newPost);
    }
})