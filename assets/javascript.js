var bio = "Welcome to the amazing portfolio of the nerdy Full Stack developer known as Mondo";
var bioArry = bio.split("");
var loopTime;
function frameLooper() {
    if (bioArry.length > 0) {
        document.getElementById("bio_text").innerHTML += bioArry.shift();
    } else {
        clearTimeout(loopTime);
        return false;
    }
    loopTime = setTimeout("frameLooper()", 70);
}
frameLooper();



$(document).ready(function () {



    $(".collapsible").collapsible();
    // console.log ("hello");

    $('.parallax').parallax();

    $(".carousel").carousel();

    $(".pic").addClass("animated slideInLeft");

    // $(".bio").addClass("animated fadeInRight");

    $(".carousel").addClass("animated fadeInUp");

    $(".rowOne").addClass("animated zoomIn");

    $(".card-image").on("click", function () {
        alert("you're about to leave this page.")

    });

    M.AutoInit();




});
