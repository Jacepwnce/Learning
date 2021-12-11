$(document).ready(function(){
    $('.trends-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,    
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 2000,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows:true
            }
        },
        {
          breakpoint:425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 1500,
            arrows:false
          }
        },
        {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 1500,
          arrows:false,
          dots:false
        },
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 1000,
          arrows:false,
          dots:false
        }
      }]
    });
  });

 