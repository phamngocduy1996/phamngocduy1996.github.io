var form = document.querySelector("form");


var date = new Date();
var tdate = date.getDate();
var month = date.getMonth() + 1;
if (tdate < 10) {
    tdate = '0' + tdate;
}
if (month < 10) {
    month = '0' + month;
}
var year = date.getUTCFullYear();
var minDate = year + "-" + month + "-" + tdate;



function validateSelect() {
    var model = document.getElementById("txtmodel");
    //validate Model
    if (model.value === "----Select-Model----") {
        onError(model, "Please select our product.")
    } else {
        onSuccess(model);
    }

}

var gender = "";
var call = "";

function validateCheckbox() {

    var men = document.getElementById("txtmen");
    var women = document.getElementById("txtwomen");
    var Yess = document.getElementById("txtyes");
    var Noo = document.getElementById("txtno");

    //validate checkbox

    if (men.checked) {
        gender = men.value;
    } else {
        gender = women.value;
    }

    if (Yess.checked) {
        call = Yess.value;
    } else {
        call = Noo.value;
    }
}

function validateInput() {

    var yourname = document.getElementById("txtyourname");
    var deliverdate = document.getElementById("txtdeliverdate");
    var deliverto = document.getElementById("txtdeliverto");



    //validate yourname
    if (yourname.value.trim() === "") {
        onError(yourname, "Please fill out your name");
    } else
    if (yourname.value.length > 100) {
        onError(yourname, "Your name should not exceed 100 characters.");
    } else {
        onSuccess(yourname);
    }
    //validate Deliver to
    if (deliverto.value.trim() === "") {
        onError(deliverto, "Please fill out the address.");
    } else
    if (deliverto.value.length > 50) {
        onError(deliverto, "Address should not exceed 500 characters.");
    } else {
        onSuccess(deliverto);
    }

    //validate Deliver Date


    if (deliverdate.value.trim() === "") {
        onError(deliverdate, "Please fill out the deliver date.");

    } else
    if (deliverdate.value < minDate) {
        onError(deliverdate, "Please choose another day.");
    } else {
        onSuccess(deliverdate);
    }


}

document.querySelector("#order-now")
    .addEventListener("click", (event) => {
        event.preventDefault();
        validateSelect();
        validateCheckbox();
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

function onSuccess(Select) {
    var parent = Select.parentElement;
    var messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    messageEle.innerText = "";
}

function onError(Select, message) {
    var parent = Select.parentElement;
    var messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
}