window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});

// -----------------------------
const recaptcha = document.querySelector('.g-recaptcha');
document.addEventListener('DOMContentLoaded', (event) => {
  recaptcha.setAttribute("data-theme", "dark");
});

// const mediaQuery = window.matchMedia('(max-width: 600px)');
// if (mediaQuery.matches) {
//   window.addEventListener('resize', function(){
//     recaptcha.setAttribute("data-size", "compact");
//   });
  
// }


const mediaQuery = '(max-width: 600px)';
const mediaQueryList = window.matchMedia(mediaQuery);

mediaQueryList.addEventListener('change', event => {
    
  if (event.matches) {
    recaptcha.setAttribute("data-size", "compact");
    
  } 
});

  
// ----------------------------

const typed = new Typed('.animate', {
  strings: [
    ".portfolio();",
    ".web();",
    ".design();"
  ],
  backSpeed: 60,
  typeSpeed: 60,
  loop: true
});

AOS.init({
  once: true,
  offset: 400,
  delay: 0,
  duration: 1000
});

options = {
  "cursorOuter": "enabled",
  "hoverEffect": "pointer-overlay",
  "hoverItemMove": false,
  "defaultCursor": false,
  "outerWidth": 50,
  "outerHeight": 50
};
magicMouse(options);

const t1 = new TimelineMax({
  paused: true
});

t1.to(".overlay", 1, {
  opacity: 1,
  ease: Expo.easeInOut
});

t1.staggerFrom(".menu ul li", 0.8, {
  y: 60,
  opacity: 0,
  ease: Expo.easeOut
}, 0.1);
t1.reverse();

document.querySelector(".menu-btn").addEventListener("click", toggleHamburger);

let ham = document.querySelector('.menu-btn');
let navbar = document.querySelector('.row');

function toggleHamburger() {
  navbar.classList.toggle("showNav")
  t1.reversed(!t1.reversed());
}

ham.addEventListener("click", toggleHamburger)
var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleHamburger)
  }
)

// 3d wr header
let scene, camera, renderer, controls, autoRotate, texture;
let space = document.querySelector("#space");

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 450, 30000);
  camera.position.set(-3000, -10, -900);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  space.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  function isTouchEnabled() {
    return ('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0);
  }
  if (isTouchEnabled()) {
    controls.enabled = false;
  } else {
    controls.enabled = true;
  }
  controls.minDistance = 700;
  controls.maxDistance = 1500;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.0;
  controls.enableZoom = false;

  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load('img/Front_Tex.jpg');
  let texture_bk = new THREE.TextureLoader().load('img/Back_Tex.jpg');
  let texture_up = new THREE.TextureLoader().load('img/Up_Tex.jpg');
  let texture_dn = new THREE.TextureLoader().load('img/Down_Tex.jpg');
  let texture_rt = new THREE.TextureLoader().load('img/Right_Tex.jpg');
  let texture_lf = new THREE.TextureLoader().load('img/Left_Tex.jpg');

  materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_ft
  }));
  materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_bk
  }));
  materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_up
  }));
  materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_dn
  }));
  materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_rt
  }));
  materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_lf
  }));

  for (let i = 0; i < 6; i++){
    materialArray[i].side = THREE.BackSide;
  let skyboxGeo = new THREE.BoxGeometry(5000, 5000, 5000);
  let skybox = new THREE.Mesh(skyboxGeo, materialArray);
  scene.add(skybox);
  }
  window.addEventListener('resize', onWindowResize, false);
  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init();





//  -----------------------

VanillaTilt.init(document.querySelector(".js-tilt"), {
  perspective: 20,
  gyroscopeMinAngleX: -185,
});