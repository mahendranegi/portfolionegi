const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});
const phrases = ["UI Designer", "Pixel-Perfect UI", "Front-End Expert"];
const dynamicText = document.getElementById("dynamic-text");

let i = 0;

function updateText() {
  // fade out
  dynamicText.classList.add("fade-out");

  setTimeout(() => {
    // change text
    i = (i + 1) % phrases.length;
    dynamicText.textContent = phrases[i];

    // fade in
    dynamicText.classList.remove("fade-out");
    dynamicText.classList.add("fade-in");

    setTimeout(() => {
      dynamicText.classList.remove("fade-in");
    }, 500); // match transition time
  }, 500); // match transition time
}

// change every 2.5 seconds
setInterval(updateText, 2500);

document.getElementById("downloadCvBtn").addEventListener("click", function() {
    window.location.href = "https://drive.google.com/uc?export=download&id=1kXlEuJbJkexSWcMVlb8Uo2WG2pkioj6z";
  });

  // Tabs switching
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active state
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Add active to clicked tab
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Initialize LightGallery for each tab-content
  document.querySelectorAll(".tab-content").forEach(function (gallery) {
    lightGallery(gallery, {
      plugins: [lgZoom, lgThumbnail],
      speed: 500,
      download: true,
      selector: 'a', // target the links inside
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");
  const skillValues = document.querySelectorAll(".skill-value");

  function animateProgress() {
    progressBars.forEach((bar, index) => {
      const value = parseInt(bar.getAttribute("data-progress"));
      bar.style.width = value + "%";

      let start = 0;
      const timer = setInterval(() => {
        if (start >= value) {
          clearInterval(timer);
        } else {
          start++;
          skillValues[index].textContent = start + "%";
        }
      }, 15);
    });
  }

  const section = document.querySelector("#skills-tools");
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateProgress();
      observer.disconnect();
    }
  }, { threshold: 0.4 });

  observer.observe(section);
});
