$(document).ready(function(){
    $(".collapsible").collapsible();
    // console.log ("hello");

    $('.parallax').parallax();

    $(".carousel").carousel();

    $(".pic").addClass("animated slideInLeft");

    $(".bio").addClass("animated fadeInRight");
    
    $(".carousel").addClass("animated fadeInUp");

    $(".rowOne").addClass("animated zoomIn");

    $(".card-image").on("click", function(){
        alert("you're about to leave this page.")
  
    });

//  setTimeout (function(){
//     $(".rowOne").addClass("animated zoomIn").removeClass("hide");
//     }, 400);


    

  });
        