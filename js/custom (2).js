$(function () {
  "use strict"

  $('.header').height($(window).height());
  $(window).resize(function () {
    $('.header').height($(window).height());


  });
  $('.header .overlay i').click(function () {
    $('html, body').animate({
      scrollTop: $('.features').offset().top
    }, 2000);


  });
  $('.our-works button').click(function () {
    $('.our-works  .hide').fadeIn(1000);

  });

  function checking () {
    if ($('.client:first').hasClass('active')) {

      $('.fa-chevron-left').fadeOut();

    } else {

      $('.fa-chevron-left').fadeIn();

    }
  };
  checking ();
  $('.testi i').click(function () {
    if($(this).hasClass('.right')){
      $('.over .active').fadeOut(100, function() {
        $(this).removeClass('active').next('.testi .over .client').addClass('active').fadeIn();
        //checking ();

      });
    }

  });


//trigger the nicescroll
  $("body").niceScroll({
    cursorcolor: "#f75f0d",
    cursorwidth: "8px",
    cursorborder: "1px solid #f75f0d"
  });


});
