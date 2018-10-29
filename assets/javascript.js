var bio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque natus neque ad autem, aliquid maiores vero amet qui quaerat sint. Pariatur ad eveniet, suscipit ea blanditiis odio perspiciatis in. Incidunt?";
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

let i = 0;
let images = ["assets/images/image1.jpg","assets/images/image2.jpg"];
let time = 5000;



const changeImg = () => {
    document.slide.src = images[i];
    
    if(i < images.length - 1){
        i++
    }else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg

let j = 0;
let bgImages = ["assets/images/BackgroundOne.jpg","assets/images/BackgroundTwo.jpg"];
let bgTime = 20000;

const changeBgImg = () =>{
    document.slideBg.src = bgImages[j];
    if(j < bgImages.length -1){
        j++
    }else{
        j = 0;
    }
    setTimeout("changeBgImg()",bgTime);
}
changeBgImg();


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
