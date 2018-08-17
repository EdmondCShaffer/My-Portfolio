$(document).ready(function(){
    $(".collapsible").collapsible();
    // console.log ("hello");

    $('.parallax').parallax();

    $(".carousel").carousel();

    $(".pic").addClass("animated rollIn");

    $(".collapsible").addClass("animated fadeInRight");
    
    $(".carousel").addClass("animated fadeInUp");

    $(".card-image").on("click", function(){
        alert("you're about to leave this page.")
    });





  });
        