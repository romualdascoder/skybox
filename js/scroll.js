
const aboutImg = document.querySelector(".about-img");
// const projectsTitle = document.querySelector(".projects-title");
// const skillsTitle = document.querySelector(".skills-title");
const skillsGallery = document.querySelector(".skills-gallery");
const projectsGalleryContainer = document.querySelector(".projects-gallery-container");

let currentPixel = window.pageYOffset;

//looper keeps running and track of where the new pixel is

const looper = function () {
  const newPixel = window.pageYOffset;
  const diff = newPixel - currentPixel
  const speed = diff * 0.10;
  
  
  aboutImg.style.transform = "skewY(" + speed + "deg)"
  // projectsTitle.style.transform = "skewY(" + speed + "deg)"
  // skillsTitle.style.transform = "skewY(" + speed + "deg)"
  skillsGallery.style.transform = "skewY(" + speed + "deg)"
  projectsGalleryContainer.style.transform = "skewY(" + speed + "deg)"
  
  currentPixel = newPixel;
  
  requestAnimationFrame(looper)
}

looper();


            

