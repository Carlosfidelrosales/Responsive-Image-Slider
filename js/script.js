// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 1,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints:{
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
//   });



//   var swiperConfig = {
//     slidesPerView: numVisibleCards,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: true,
//     fade: true,
//     grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   };

//   if (numVisibleCards === 1) {
//     swiperConfig.loop = false; // Disable looping
//     swiperConfig.centeredSlides = false; // Disable centering
//   }

//   swiper = new Swiper(".slide-content", swiperConfig);
// }

// // Initialize the slider on page load
// initializeSlider();

// // Check and reinitialize the slider on window resize
// window.addEventListener("resize", function () {
//   swiper.destroy(); // Destroy the existing slider
//   initializeSlider(); // Initialize a new slider
// });


// function initializeSlider() {
//   var screenWidth = window.innerWidth;

//   if (screenWidth >= 768) {
//     var cardContainers = document.querySelectorAll(".card");
//     var numVisibleCards = Math.min(3, cardContainers.length);

//     var swiperConfig = {
//       slidesPerView: numVisibleCards,
//       spaceBetween: 25,
//       loop: true,
//       centerSlide: true,
//       fade: true,
//       grabCursor: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     };

//     if (numVisibleCards === 1) {
//       swiperConfig.loop = false; // Disable looping
//       swiperConfig.centeredSlides = false; // Disable centering
//     }

//     var swiper = new Swiper(".slide-content", swiperConfig);
//   }
// }

// // Initialize the slider on page load
// initializeSlider();

// // Check and reinitialize the slider on window resize
// window.addEventListener("resize", initializeSlider);



// function initializeSlider() {
//   var screenWidth = window.innerWidth;

//   if (screenWidth >= 768) {
//     var cardContainers = document.querySelectorAll(".card");
//     var numVisibleCards = Math.min(3, cardContainers.length);

//     var swiperConfig = {
//       slidesPerView: numVisibleCards,
//       spaceBetween: 25,
//       loop: true,
//       centerSlide: true,
//       fade: true,
//       grabCursor: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     };

//     if (numVisibleCards === 1) {
//       swiperConfig.loop = false; // Disable looping
//       swiperConfig.centeredSlides = false; // Disable centering
//     }

//     var swiper = new Swiper(".slide-content", swiperConfig);
//   }
// }

// // Initialize the slider on page load
// initializeSlider();

// // Check and reinitialize the slider on window resize
// window.addEventListener("resize", initializeSlider);



// function updateSwiperBreakpoints(numVisibleCards) {
//   var breakpoints = {
//     0: {
//       slidesPerView: 1,
//     },
//   };

//   if (numVisibleCards == 2) {
//     breakpoints[520] = {
//       slidesPerView: 2,
//     };
//   }

//   if (numVisibleCards >= 3) {
//     breakpoints[950] = {
//       slidesPerView: 3,
//     };
//   }

//   return breakpoints;
// }

// function initializeSlider() {
//   var screenWidth = window.innerWidth;
//   var cardContainers = document.querySelectorAll(".card");
//   var numVisibleCards = Math.min(3, cardContainers.length);

//   var swiperConfig = {
//     slidesPerView: numVisibleCards,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: true,
//     fade: true,
//     grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: updateSwiperBreakpoints(numVisibleCards), // Set breakpoints
//   };

//   if (numVisibleCards === 1) {
//     swiperConfig.loop = false; // Disable looping
//     swiperConfig.centeredSlides = false; // Disable centering
//   }

//   var swiper = new Swiper(".slide-content", swiperConfig);
// }

// // Initialize the slider on page load
// initializeSlider();

// // Check and reinitialize the slider on window resize
// window.addEventListener("resize", function () {
//   initializeSlider();
// });


// OKAY CODE
// var swiper = null; // Declare the swiper variable globally

// function updateSwiperBreakpoints(numVisibleCards) {
//   var breakpoints = {
//     0: {
//       slidesPerView: 1,
//     },
//   };

//   if (numVisibleCards == 2) {
//     breakpoints[520] = {
//       slidesPerView: 2,
//     };
//   }

  // if (numVisibleCards >= 3) {
  //   breakpoints[950] = {
  //     slidesPerView: 3,
  //   };
  // }

//   return breakpoints;
// }

// function initializeSlider() {
//   var screenWidth = window.innerWidth;
//   var cardContainers = document.querySelectorAll(".card");
//   var numVisibleCards = Math.min(3, cardContainers.length);

//   var swiperConfig = {
//     slidesPerView: numVisibleCards,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: true,
//     fade: true,
//     grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: updateSwiperBreakpoints(numVisibleCards), // Set breakpoints
//   };

//   if (numVisibleCards === 1) {
//     swiperConfig.loop = false; // Disable looping
//     swiperConfig.centeredSlides = false; // Disable centering
//   }

//   // Destroy the existing Swiper instance if it exists
//   if (swiper) {
//     swiper.destroy();
//   }

//   // Initialize a new Swiper instance
//   swiper = new Swiper(".slide-content", swiperConfig);
// }

// // Initialize the slider on page load
// initializeSlider();

// // Check and reinitialize the slider on window resize
// window.addEventListener("resize", function () {
//   initializeSlider();
// });


var swiper = null; // Declare the swiper variable globally

function updateNumVisibleCards() {
  var screenWidth = window.innerWidth;
  var cardContainers = document.querySelectorAll(".card");
  return Math.min(3, cardContainers.length); // Limit to a maximum of 3 cards
}

function updateSwiperBreakpoints(numVisibleCards) {
  var breakpoints = {
    0: {
      slidesPerView: 1,
    },
  };

  if (numVisibleCards == 2) {
    breakpoints[520] = {
      slidesPerView: 2,
    };
  }

  if (numVisibleCards == 3) {
    breakpoints[950] = {
      slidesPerView: 3,
    };
  }
  

  return breakpoints;
}

function initializeSlider() {
  var numVisibleCards = updateNumVisibleCards();

  var swiperConfig = {
    slidesPerView: numVisibleCards,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: updateSwiperBreakpoints(numVisibleCards), // Set breakpoints
  };

  if (numVisibleCards === 1) {
    swiperConfig.loop = false; // Disable looping
    swiperConfig.centeredSlides = false; // Disable centering
  }
  if (numVisibleCards === 2) {
    swiperConfig.loop = false;
    swiperConfig.centeredSlides = false;

  }
  if (numVisibleCards === 3) {
    swiperConfig.loop = false;
    swiperConfig.centeredSlides = false;

  }

  // Destroy the existing Swiper instance if it exists
  if (swiper) {
    swiper.destroy();
  }

  // Initialize a new Swiper instance
  swiper = new Swiper(".slide-content", swiperConfig);
}



// document.querySelectorAll(".js-gig-favorite-btn").forEach(function (button) {
//   button.addEventListener("click", function (event) {
//     var popup = event.currentTarget.nextElementSibling;
//     popup.style.display = "block";

//     // Hide the popup when clicking outside
//     document.addEventListener("click", function hidePopup(e) {
//       if (!popup.contains(e.target) && !button.contains(e.target)) {
//         popup.style.display = "none";
//         document.removeEventListener("click", hidePopup);
//       }
//     });
//   });
// });


// document.querySelectorAll(".js-gig-favorite-btn").forEach(function (button) {
//   button.addEventListener("click", function (event) {
//     var popup = event.currentTarget.nextElementSibling;
//     if (popup.style.display === "block") {
//       popup.style.display = "none";
//     } else {
//       popup.style.display = "block";

//       // Hide the popup when clicking outside
//       var hidePopup = function (e) {
//         if (!popup.contains(e.target) && !button.contains(e.target)) {
//           popup.style.display = "none";
//           document.removeEventListener("click", hidePopup);
//         }
//       };

//       document.addEventListener("click", hidePopup);
//     }
//   });
// });


document.querySelectorAll(".js-gig-menu-btn").forEach(function (button) {
  var popup = button.nextElementSibling;
  popup.style.display = "none";

  button.addEventListener("click", function (event) {
    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";

      // Hide the popup when clicking outside
      var hidePopup = function (e) {
        if (!popup.contains(e.target) && !button.contains(e.target)) {
          popup.style.display = "none";
          document.removeEventListener("click", hidePopup);
        }
      };

      document.addEventListener("click", hidePopup);
    }
  });
});


// Initialize the slider on page load
initializeSlider();

// Check and reinitialize the slider on window resize
window.addEventListener("resize", function () {
  initializeSlider();
});
