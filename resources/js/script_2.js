
$("document").ready(function(){
    
    /*    Sticky navigation   */
    $(".js--section-two").waypoint(function(direction) {
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '20%' 
    });
    
    
    /*  Scroll on Buttons  */
    
    $(".js--scroll-to-section-one").click(function(){
        $('html, body').animate({scrollTop: $('.js--section-one').offset().top}, 600);    
    });
    
    
    $(".js--scroll-to-section-two").click(function(){
        $('html, body').animate({scrollTop: $('.js--section-two').offset().top}, 600);
    });
    
    
    $(".js--scroll-to-section-three").click(function(){
        $('html, body').animate({scrollTop: $('.js--section-three').offset().top}, 600);
    });
    
    /*
    $(".js--scroll-to-section-four").click(function(){
        $('html, body').animate({scrollTop: $('.js--section-four').offset().top}, 600);
    });
    
    */
    
    // diferent method for scrolling to anchor IDs
    // anchor in a elements and in the section ID definition necessary
            // Select all links with hashes
        $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 600, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });
    
    
    /*      picture serie      */
    
      $("#js--image1")
    .mouseover(function() {
      $("#js--desc1").removeClass("display-none");
    })
    .mouseout(function() {
      $("#js--desc1").addClass("display-none");
    });

  $("#js--image2")
    .mouseover(function() {
      $("#js--desc2").removeClass("display-none");
    })
    .mouseout(function() {
      $("#js--desc2").addClass("display-none");
    });

  $("#js--image3")
    .mouseover(function() {
      $("#js--desc3").removeClass("display-none");
    })
    .mouseout(function() {
      $("#js--desc3").addClass("display-none");
    });

   $("#js--image4")
    .mouseover(function() {
      $("#js--desc4").removeClass("display-none");
    })
    .mouseout(function() {
      $("#js--desc4").addClass("display-none");
    });
})

/*       Animated CSS effects         */

$('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass("animated fadeIn");
    }, {
        offset: '30%' 
    });
    
