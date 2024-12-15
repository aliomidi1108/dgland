document.write(alert(  "  برای رفتن به صفحه دوم از منو بر روی موبایل کلیک کنید و در حالت رسپنسیو بر روی پیشنهاد ویژه از داخل منو<<<<<<< و برای ورود به صفحه سوم بر روی گوشی s24ultra کلیک کنید" ));


//
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-full"); 

  const isMenuOpen = !mobileMenu.classList.contains("translate-x-full");
  menuToggle.innerHTML = isMenuOpen
    ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
       </svg>` 
    : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
       </svg>`; 
});

// start swiper slider top

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// end swiper slider top

// start swiper dasteporbazdid
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 7,
    spaceBetween: 30,
    breakpoints: {
      1280: {
        slidesPerView: 7,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 5.3,
        spaceBetween: 30,
      },
  
      0: {
        slidesPerView: 2.8,
        spaceBetween: 30,
      },
    },
    freeMode: true,
    
  });

// end swiper dasteporbazdid


//swiper3

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1.4,
  spaceBetween: 5,
  centeredSlides: true,

  breakpoints: {
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
      loop: false,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
    },
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//end swiper3

// start swiper mobile mahboob

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 7,
  spaceBetween: 30,
  breakpoints: {
    1280: {
      slidesPerView: 5.1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4.1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 5.1,
      spaceBetween: 30,
    },

    0: {
      slidesPerView: 2.9,
      spaceBetween: 30,
    },
  },
  freeMode: true,
  
});

//  swiper mobile mahboob

// start swiper mobile janebi

var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 9,
  spaceBetween: 30,
  breakpoints: {
    1280: {
      slidesPerView: 5.1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4.1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 5.1,
      spaceBetween: 30,
    },

    0: {
      slidesPerView: 2.9,
      spaceBetween: 30,
    },
  },
  freeMode: true,
  
});

//  swiper mobile janebi

//swiper porfooroosh

var swiper = new Swiper(".mySwiper6", {
  slidesPerView: "auto",
  spaceBetween: 8,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//brandha
var scrollc = new Swiper(".mySwiper7", {
  spaceBetween: 0,
  breakpoints: {
    1280: {
      slidesPerView: 7,
      spaceBetween: 30,
      speed: 7000,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
      speed: 7000,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 5,
      speed: 7000,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 1,
      speed: 7000,
    },
  },
  effect: "slide",
  loop: true,
  freeMode: false,
  slidesPerView: 3,
  speed: 5000,
  allowTouchMove: false,
  autoplay: {
    pauseOnMouseEnter: true,

    delay: 0,
    autoplayDisableOnInteraction: true,
    disableOnInteraction: false,
    waitForTransition: true,
    stopOnLastSlide: false,
  },
});

//end brandha

//start bishtarrr

  const text = document.getElementById("text");
  const toggleButton = document.getElementById("toggleButton");

  let isExpanded = false;

  toggleButton.addEventListener("click", () => {
    if (isExpanded) {
      text.style.maxHeight = "10px";
      toggleButton.textContent = "مشاهده بیشتر";
    } else {
      text.style.maxHeight = text.scrollHeight + "px"; 
      toggleButton.textContent = "بستن";
    }
    isExpanded = !isExpanded;
  });



//end bishtarrr

document.querySelectorAll('li.relative').forEach(item => {
  item.addEventListener('click', () => {
    const submenu = item.querySelector('div');
    submenu.classList.toggle('hidden');
  });
});











