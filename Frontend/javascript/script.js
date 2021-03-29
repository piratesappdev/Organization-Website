console.log("this is working"); 

/*$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });*/

  $(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop()>50);
  });