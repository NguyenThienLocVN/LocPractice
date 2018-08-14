$(function(){
    menuShow();
    startTimer();
    scrollTop();
    fixedNav();
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

var seconds = 900000;
var timer = setInterval(function(){
    var days = Math.floor(seconds/24/60/60);
    var hoursLeft = Math.floor((seconds) - (days*86400));
    var hours = Math.floor(hoursLeft/3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours)*3600);
    var minutes = Math.floor(minutesLeft/60);
    var remainingSeconds = seconds % 60;

    if(remainingSeconds < 10){
        remainingSeconds = "0" + remainingSeconds;
    }

    document.getElementById('time-number').innerHTML = days + " : " + hours + " : " + minutes + " : " + remainingSeconds;
    if(seconds == 0){
        clearInterval(timer);
    }
    else
    {
        seconds--;
    }
}, 1000);

// ==================================================================
// Function click button to scroll to top
function scrollTop() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $("#button-scroll-top").show();
      } else {
        $("#button-scroll-top").hide();
      }
    });
  
    // When click, the content scroll up to top
    $("#button-scroll-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  }





// ===================================================================
// Function fixed navigation when scroll down
function fixedNav(){
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 300) {
        var leftmenu = $(".left-menu");
        leftmenu.addClass("fixed-nav");
        leftmenu.removeClass('left-menu');
        $('.category-menu').slideUp();
        $('.hide-menu-left').slideUp();
        } else {
        var leftmenu = $(".fixed-nav");
        leftmenu.addClass("left-menu");
        leftmenu.removeClass('fixed-nav');
        }
    });
}