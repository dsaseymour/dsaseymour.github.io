$(document).ready(function() {
  /**
   *   * header__hpanel-box
   * portfolio__testimonials-box
   *
   */

  $(".header__hpanel-box").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    settings: "unslick"
  });

  $(".portfolio__testimonials-box").slick({
    autoplay: true,
    autoplaySpeed: 1900
  });

  //  $(".hpanel").hide();
});
