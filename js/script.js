$(document).ready(function() {
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
            }, 1000, function() {
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
   

    // Sticky nav
    $("#about").waypoint(function(direction){
        if (direction == "down") {
            $(".nav").addClass("sticky");
        } else {
            $(".nav").removeClass("sticky");
        }
    }, {
        offset: "60px"
    });


    // Animations on scroll
    $("#offer").waypoint(function(direction){
        $(".js--wp-1").addClass("animated slideInLeft");
        $(".js--wp-2").addClass("animated slideInRight");
        $(".js--wp-3").addClass("animated infinite pulse");
    }, {
        offset: "50%"
    });

    // Mobile nav
    $(".js--nav-icon").click(function() {
      var nav = $(".js--menu");
      var icon = $(".js--nav-icon i");

      nav.slideToggle();

      if (icon.hasClass("fa fa-bars")) {
        icon.removeClass("fa fa-bars");
        icon.addClass("fa fa-times");
      } else {
        icon.removeClass("fa fa-times");
        icon.addClass("fa fa-bars");
      }
    });

  });