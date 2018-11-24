(function($) {
  "use strict"; // Start of use strict

  // var heightNavbar = 76; // height do navbar: 76px;

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top) // - (heightNavbar - 2)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

})(jQuery); // End of use strict