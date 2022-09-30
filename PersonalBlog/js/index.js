var modal = document.getElementsByClassName("nav-overlay")[0];
var openmodal = document.getElementsByClassName("navbar-toggler-icon")[0];
var navhd = document.getElementById("navbarSupportedContent");
openmodal.onclick = function() {
    modal.style.display = "block";
    navhd.style.display = "block";
}

modal.onclick = function() {
    modal.style.display = "none";
    navhd.style.display = "none";
    openmodal.style.display = "block";

}