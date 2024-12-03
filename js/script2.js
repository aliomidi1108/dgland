
function toggleSubMenu(brandMenu ) {
  const menu = document.getElementById(brandMenu);
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden"); 
  } else {
    menu.classList.add("hidden"); 
  }
}


function toggleFilter() {
  const filterBox = document.getElementById("brandMenu");
  if (filterBox.classList.contains("translate-y-full")) {
    filterBox.classList.remove("translate-y-full"); 
  } else {
    filterBox.classList.add("translate-y-full"); 
  }
}

function toggleSubMenu(rang ) {
  const menu = document.getElementById(rang);
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden"); 
  } else {
    menu.classList.add("hidden"); 
  }
}


function toggleFilter() {
  const filterBox = document.getElementById("rang");
  if (filterBox.classList.contains("translate-y-full")) {
    filterBox.classList.remove("translate-y-full"); 
  } else {
    filterBox.classList.add("translate-y-full"); 
  }
}


function toggleSubMenu(sim ) {
  const menu = document.getElementById(sim);
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden"); 
  } else {
    menu.classList.add("hidden"); 
  }
}


function toggleFilter() {
  const filterBox = document.getElementById("sim");
  if (filterBox.classList.contains("translate-y-full")) {
    filterBox.classList.remove("translate-y-full"); 
  } else {
    filterBox.classList.add("translate-y-full"); 
  }
}

///


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
