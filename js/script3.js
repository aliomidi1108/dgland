

var swiper30 = new Swiper(".mySwiper10", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
  });
  var swiper40 = new Swiper(".mySwiper9", {
    spaceBetween: 10,
    mousewheel: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: swiper30,
    },
  });

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

