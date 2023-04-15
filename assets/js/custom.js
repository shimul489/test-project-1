const myElement = document.getElementById("demo");
myElement.style.color = "white"; 
    // Set the date we're counting down to
    var countDownDate = new Date("april 17, 2023 15:37:25").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = "<span>" + days + "</span>"  + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
      
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);


    // banner slider 
    var swiper = new Swiper(".banner-slider", {
      slidesPerView: 1,
      loop: true,
      pagination: {
          el: ".swiper-pagination",
      },
  });
    // banner slider 
    var swiper = new Swiper(".banner-slider", {
      slidesPerView: 1,
      loop: true,
      pagination: {
          el: ".swiper-pagination",
      },
  });


 var swiper = new Swiper(".package-slider", {
    slidesPerView: 4,
    speed: 1200,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".swiper-pagination1",
        clickable: 'true',
    },
    navigation: {
        nextEl: '.package-next',
        prevEl: '.package-prev',
    },

    // pagination: {
    //     el: ".h3-hero-slider-pagination",
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
    //     }
    // },
    breakpoints: {
        
        480: {
            slidesPerView: 1,
            navigation: false,
        },
        768: {
            slidesPerView: 1,
            navigation: false,
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
    }
});


var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 2,
  speed: 1200,
  spaceBetween: 30,
  loop: true,
//   autoplay: {
//       delay: 4000,
//   },
  navigation: {
      nextEl: '.testi-button-next',
      prevEl: '.testi-button-prev',
  },
  breakpoints: {
      280: {
          slidesPerView: 1,
          navigation: false,
      },
      480: {
          slidesPerView: 1,
          navigation: false,
      },
      768: {
          slidesPerView: 2,
          navigation: false,
          
      },
    //   992: {
    //       slidesPerView: 2,
    //   },
    //   1300: {
    //       slidesPerView: 2,
    //   },
    //   1400: {
    //       slidesPerView: 2,
    //   },
  }
});


