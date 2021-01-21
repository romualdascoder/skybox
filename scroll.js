const section = document.querySelector(".nav-list");
const aboutImg = document.querySelector(".about-img");
// const projectsTitle = document.querySelector(".projects-title");
// const skillsTitle = document.querySelector(".skills-title");
const skillsGallery = document.querySelector(".skills-gallery");

let currentPixel = window.pageYOffset;

//looper keeps running and track of where the new pixel is

const looper = function () {
  const newPixel = window.pageYOffset;
  const diff = newPixel - currentPixel
  const speed = diff * 0.20;
  
  section.style.transform = "skewY(" + speed + "deg)"
  aboutImg.style.transform = "skewY(" + speed + "deg)"
  // projectsTitle.style.transform = "skewY(" + speed + "deg)"
  // skillsTitle.style.transform = "skewY(" + speed + "deg)"
  skillsGallery.style.transform = "skewY(" + speed + "deg)"
  
  currentPixel = newPixel;
  
  requestAnimationFrame(looper)
}

looper();


            

