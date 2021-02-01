const aboutImg = document.querySelector(".about-img");
const skillsGallery = document.querySelector(".skills-gallery");
const projectsGalleryContainer = document.querySelector(".projects-gallery-container");
let currentPixel = window.pageYOffset;
const looper = function () {
  const newPixel = window.pageYOffset;
  const diff = newPixel - currentPixel
  const speed = diff * 0.10;
  aboutImg.style.transform = "skewY(" + speed + "deg)"
  skillsGallery.style.transform = "skewY(" + speed + "deg)"
  projectsGalleryContainer.style.transform = "skewY(" + speed + "deg)"
  currentPixel = newPixel;
  requestAnimationFrame(looper)
}
looper();