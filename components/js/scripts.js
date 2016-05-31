jQuery(document).ready(function($){


  // Responsive iframes
  function responsiveIframe() {
    $('iframe').each(function(){
      var iw = $(this).width();
      var ih = $(this).height();
      var ip = $(this).parent().width();
      var ipw = ip/iw;
      var ipwh = Math.round(ih*ipw);
      $(this).css({
        'width': ip,
        'height' : ipwh,
      });
    });
  }

  responsiveIframe();

  // Trigger video resize if browser is resized
  $(window).resize(function(){
    responsiveIframe();
  });

  // Watch body height to see if font size settings are changed
  var watch_el = $('body');
  var el_height = watch_el.innerHeight();

  window.setInterval(function(){
    var new_height = watch_el.innerHeight();
    if ( new_height != el_height ) {
      el_height = new_height;
      responsiveIframe();
    }
  }, 200);

  // TABS

   $('.tabs-links a').on('click', function( e ) {
      e.preventDefault();
      // get target tab
      var newTab = $( this).attr("href")
      // show targeted tab content while hiding the rest
      $(newTab).fadeIn().siblings().hide();
      // Add the active class to the parent list item while removingit from therest
      $(this).parent('li').addClass('active').siblings().removeClass('active');

   });

   // ACCORDION

   $(".accordion-element-title").on("click", function(e){
      e.preventDefault();
      // get the target accordion element
      var targetAccordion = $(this).attr("href");
      // collapse all accordion elements
      $(".accordion-element-title").removeClass("active");
      $(".accordion-element-content").slideUp();
      // show the targeted element only
      $(this).addClass("active");
      $( targetAccordion ).slideDown();
   });

   // SPYSCROLL

   $('body').scrollspy({ target: '#main-nav-top' });


   // SMOOTH SCROLLING

    $("#main-nav-top a").on('click', function(event) {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 60
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });

});

 jQuery(window).load(function($){
   // masonry 

   var container = document.querySelector('#container');
   var msnry = new Masonry( container, {
     // options
     
     itemSelector: '.item'
   });
});



