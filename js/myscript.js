$(function(){
    menuShow();
    startTimer();
    fixedNav();
    timer();
});



// ===================================================================
// Function show & hide navigation bar
function menuShow() {
    $(".left-menu-title-1").click(function(){
        $('.hide-menu-left').slideToggle("fast");
        $('.category-menu').slideUp();
    })


    $(".left-menu-title-3").click(function(){
        $('.category-menu').slideToggle("fast");
        $('.hide-menu-left').slideUp();
    })
}

// ===================================================================
// Declare an array with 3 images
var images = [], x = -1;
images[0] = "./img/revo11.jpg";
images[1] = "./img/revo12.jpg";
images[2] = "./img/revo13.jpg";

// Function change next image
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("slide-img-item").src = images[x];
}

// Function change previous image
function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("slide-img-item").src = images[x];
}

// Function change next image each 3 secs
function startTimer() {
    setInterval(displayNextImage, 3000);
}


// ===================================================================
// Function time countdown
var upgradeTime = 1000000;
var seconds = upgradeTime;
function timer() {
    var days        = Math.floor(seconds/24/60/60);
    var hoursLeft   = Math.floor((seconds) - (days*86400));
    var hours       = Math.floor(hoursLeft/3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
    var minutes     = Math.floor(minutesLeft/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds; 
    }
    document.getElementById('time').innerHTML = days + " : " + hours + " : " + minutes + " : " + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('timer()', 1000);





// ===================================================================
// Function fixed navigation when scroll down
function fixedNav(){
    if(window.innerWidth < 768){
        $(window).scroll(function() {
          if ($(window).scrollTop() >= 400) {
            $(".left-menu").addClass("fixed-nav");
          } else {
            $(".left-menu").removeClass("fixed-nav");
          }
        });
      }
}
