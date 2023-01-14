// add class open and toggle-open when you click on icon
let navLinks = document.querySelector(".landing-page .landing-nav .links");
let toggleMenu = document.querySelector(
  ".landing-page .landing-nav .toggle-menu"
);
// add class open and toggle-menu
toggleMenu.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("toggle-open");
  navLinks.classList.toggle("open");
};
// end
// close when nav (responsive) opened
document.addEventListener("click", (e) => {
  if (e.target !== toggleMenu && e.target !== navLinks) {
    if (navLinks.classList.contains("open")) {
      navLinks.classList.toggle("open");
      toggleMenu.classList.toggle("toggle-open");
    }
  }
});
// end
navLinks.onclick = function (e) {
  e.stopPropagation();
};
// end

// loop to background on landing-page
let landingPage = document.querySelector(".landing-page");
let randomBg = true;
let backGrInt;
let BigScreens = ["1.jpg", "2.jpg", "3.jpg"];
let mediumScreens = ["01.jpg", "02.jpg", "03.jpg"];
let mobileScreens = ["001.jpg", "002.jpg", "003.jpg"];

function randomizeImg() {
  if (randomBg === true) {
    backGrInt = setInterval(() => {
      let BigScreensCount = Math.floor(Math.random() * BigScreens.length);
      let mediumScreensCount = Math.floor(Math.random() * mediumScreens.length);
      let mobileScreensCount = Math.floor(Math.random() * mobileScreens.length);
      if (window.innerWidth >= "992") {
        landingPage.style.backgroundImage = `url(images/${BigScreens[BigScreensCount]})`;
      }
      if (window.innerWidth <= "992") {
        landingPage.style.backgroundImage = `url(images/${mediumScreens[mediumScreensCount]})`;
      }
      if (window.innerWidth <= "576") {
        landingPage.style.backgroundImage = `url(images/${mobileScreens[mobileScreensCount]})`;
      }
    }, 2000);
  }
}
randomizeImg();
// end

// when you stay on skills section show animation
let skillsSection = document.querySelector(".skills");
let skillsProgress = document.querySelectorAll(".skills .progress-value span");

window.onscroll = function () {
  if (
    window.scrollY >
    skillsSection.offsetTop + skillsSection.offsetHeight - this.innerHeight
  ) {
    skillsProgress.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};
// end
// toggle setting box
document.querySelector(".setting .fa-gear").onclick = function () {
  // this for add class spin
  this.classList.toggle("fa-spin");
  // toggle setting box
  document.querySelector(".setting").classList.toggle("open");
};
// end

// change colors
let colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // change --main-color property
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // save current data-color on localstorage
    localStorage.setItem("color-option", e.target.dataset.color);
    // remove class active
    handleActive(e);
  });
});
// end
// save currrent color when you close website
if (localStorage.getItem("color-option") !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-option")
  );
  colorsLi.forEach((li) => {
    li.classList.remove("active");

    if (li.dataset.color === localStorage.getItem("color-option")) {
      li.classList.add("active");
    }
  });
}
// end
// nav bullets
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
// end

// landing links
let allLinks = document.querySelectorAll(".links a");
// end
console.log(allBullets);
console.log(allLinks);
// for swaping to sections
function swapingToSections(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
swapingToSections(allLinks);
swapingToSections(allBullets);

// end
// handle active function
function handleActive(ev) {
  // remove class active
  ev.target.parentElement.querySelectorAll(".active").forEach((span) => {
    span.classList.remove("active");
  });
  // add class active
  ev.target.classList.add("active");
}
// end
