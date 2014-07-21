$(function() {
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
  });

  function activeSectionLink(){
    $('section').each(function(){
      if ($(this).offset().top - ($(this).prev("section").height()/4) < window.pageYOffset) {
        sectionID = $(this).attr('id');

        $(".menu li").removeClass("active");
        $("a[href=#"+ sectionID +"]").parent("li").addClass("active");
      }
    });
  }

  $(window).on("scroll", function(){
    activeSectionLink();

    showHeaderLogo();
  });

  function showHeaderLogo(){
    var scroll = $(document).scrollTop();

    if (scroll > ($(".next-event").offset().top)) {
      $(".main-header").css("background-color", "rgba(255,255,255,0.95)");

      $(".main-header .logo").animate({
        opacity: "1"
      }, 100);
    }
    else {
      $(".main-header").css("background-color", "rgba(255,255,255,0)");

      $(".main-header .logo").animate({
        opacity: "0"
      }, 100);
    }
  }
});
