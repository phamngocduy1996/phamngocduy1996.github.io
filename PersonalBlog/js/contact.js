function validateInput() {

    var fullname = document.getElementById("txtfullname");
    var email = document.getElementById("txtemail");
    var subject = document.getElementById("txtsubject");
    var Message = document.getElementById("txtmessage");
    var form = document.querySelector("form");

    if (fullname.value.trim() === "") {
        onError(fullname, "Please fill out your name");
    } else
    if (fullname.value.length > 100) {
        onError(fullname, "Your name should not exceed 100 characters.");
    } else {
        onSuccess(fullname);
    }

    //validate email

    if (email.value.trim() === "") {
        onError(email, "Please fill out your email.");
    } else
    if (!isValidEmail(email.value.trim())) {
        onError(email, "Please fill out your email.");
    } else
    if (email.value.length > 100) {
        onError(email, "Your email should not exceed 100 characters.");
    } else {
        onSuccess(email);
    }

    //validate subject

    if (subject.value.trim() === "") {
        onError(subject, "Please fill out the subject.");
    } else
    if (subject.value.length < 50) {
        onError(subject, "Subject should not shorter than 50 characters.");
    } else
    if (subject.value.length > 250) {
        onError(subject, "Subject should not exceed 250 characters.");
    } else {
        onSuccess(subject);
    }

    //validate message

    if (Message.value.trim() === "") {
        onError(Message, "Please fill out the message.");
    } else
    if (Message.value.length > 50) {
        onError(Message, "Message should not exceed 500 characters.");
    } else {
        onSuccess(Message);
    }
    var form = document.getElementById("myForm");

    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);
}

document.querySelector("button")
    .addEventListener("click", (event) => {
        event.preventDefault();
        validateInput();
    });

function onSuccess(input) {
    var parent = input.parentElement;
    var messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    messageEle.innerText = "";
}

function onError(input, message) {
    var parent = input.parentElement;
    var messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
}

function isValidEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}