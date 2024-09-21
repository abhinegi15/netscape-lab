
AOS.init();


$(document).ready(function () {

  // toggle class in header
  $(".menu-bar").click(function () {
    $("header").toggleClass('collapsed');
  });


  // add class in header when window scrolled
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
      $("header").addClass("headerBg");
    }
    else if (scroll < 20) {
      $("header").removeClass("headerBg");
    }
  });

  // back to top btn

  const backToTop = $('.back-top')
  const amountScrolled = 300

  $(window).scroll(() => {
    $(window).scrollTop() >= amountScrolled
      ? backToTop.fadeIn('fast')
      : backToTop.fadeOut('fast')
  })

  backToTop.click(() => {
    $('body, html').animate({
      scrollTop: 0
    }, 600)
    return false
  })
});


$('#our-freshers-carosuel').owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    768: {
      items: 2,
      nav: false
    },
    1000: {
      items: 4,
      nav: true,
      loop: false
    }
  }
})


// $('.slick', '.services-slider').slick({
//   vertical: true,
//   verticalSwiping: true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,             
//   autoplaySpeed: 2000,
// });

$('.slick', '.services-slider').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,             
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768, 
      settings: {
        // vertical: true,
        // verticalSwiping: true,
        slidesToShow: 3, 
      }
    }
  ]
});
