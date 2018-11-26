$(document).ready(function() {
  /***
   * header__hpanel-box
   * portfolio__testimonials-box
   *  

   */
  //  $(".hpanel").hide();

  $(".header__hpanel-box").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false
  });

  $(".portfolio__testimonials-box").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false
  });
});
