//add underline to link in nav
const links = document.querySelectorAll("ul li a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// show/close burger menu
const but_close = document.getElementById("but_close_menu");
const but_showMenu = document.getElementById("button_burger_menu");

but_showMenu.onclick = openMenu;
but_close.onclick = closeMenu;

function openMenu() {
  document.getElementById("burger_menu").style.display = "block";
}
function closeMenu() {
  document.getElementById("burger_menu").style.display = "none";
}

//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slider_show")[0].children;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  //to do not visible
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("shiftRightSlider");
    slides[i].style.zIndex = 1;
    const stylesSlide = window.getComputedStyle(slides[i]);
    const backgroundImage = stylesSlide.backgroundImage;
    const urlSlide = backgroundImage.replace(
      /^url\(["']?https?:\/\/[^/]+\/?/,
      'url("./'
    );
    //to do visible
    slides[
      i
    ].style.backgroundImage = `linear-gradient(rgba(209, 169, 84, 0.85),rgba(209, 169, 84, 0.85)), ${urlSlide}`;
  }
  slides[slideIndex - 1].classList.remove("shiftRightSlider");
  slides[slideIndex - 1].style.zIndex = 10;
  const stylesSlideShow = window.getComputedStyle(slides[slideIndex - 1]);
  const backgroundImageShow = stylesSlideShow.backgroundImage;
  const urlSlideShow = backgroundImageShow.replace(
    /^.*url\(["']?(?:https?:\/\/[^/]+)?\/?/,
    'url("./'
  );
  slides[slideIndex - 1].style.backgroundImage = urlSlideShow;
}
