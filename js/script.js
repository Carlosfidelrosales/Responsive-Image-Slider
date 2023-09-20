
var swiper = null; 

function updateNumVisibleCards() {
  var screenWidth = window.innerWidth;
  var cardContainers = document.querySelectorAll(".card");
  return Math.min(3, cardContainers.length); 
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
    breakpoints: updateSwiperBreakpoints(numVisibleCards), 
  };

  if (numVisibleCards === 1) {
    swiperConfig.loop = false; 
    swiperConfig.centeredSlides = false; 
  }
  if (numVisibleCards === 2) {
    swiperConfig.loop = false;
    swiperConfig.centeredSlides = false;

  }
  if (numVisibleCards === 3) {
    swiperConfig.loop = false;
    swiperConfig.centeredSlides = false;

  }

  if (swiper) {
    swiper.destroy();
  }


  swiper = new Swiper(".slide-content", swiperConfig);
}

initializeSlider();

window.addEventListener("resize", function () {
  initializeSlider();
});

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

