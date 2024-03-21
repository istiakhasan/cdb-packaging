$(document).ready(function(){
    $('.productSlider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ],
      // autoplay: true,
      autoplaySpeed: 6000
    });
    $('.live_video_with_carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ],
      // autoplay: true,
      autoplaySpeed: 4000
    });
    $('.testimonial_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      // autoplay: true,
      autoplaySpeed: 6000
    });
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
      // responsive: [
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 1
      //     }
      //   }
      // ],
      autoplay: true,
      autoplaySpeed: 5000
    });
    // trending slider
    $('.slidertwo').slick({
      slidesToShow: 5,
      slidesToScroll: 2,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ],
      // autoplay: true,
      autoplaySpeed: 4000
    });
  });