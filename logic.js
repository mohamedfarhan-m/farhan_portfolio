// gsap.to(".loading-bar::after", {
//   width: "100%", 
//   duration: 2, 
//   ease: "power2.inOut"
// });
const body = document.body;

gsap.to("#spacecraft", {
  y: -500,
  delay: 1,
  duration: 0.5,

})

gsap.from(".loader h1", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "back.out(1.7)"
});

// When page is fully loaded
window.addEventListener("load", () => {
  gsap.to("#preloader", {
    y: "-100%",
    duration: 1.5,
    delay: 1,
    ease: "power4.inOut"
  });
});


const row = document.querySelector(".scroll");
gsap.to(row, {
  x: -row.scrollWidth / 2,
  ease: "none",
  duration: 15,
  repeat: -1,

})


Shery.mouseFollower();
Shery.makeMagnet(".magnet", {
  ease: "powe3.out",
  ease: "elastic.out(1,0.3)"
});

Shery.textAnimate(".text-target" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.01,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
Shery.hoverWithMediaCircle(".text-target" /* Element to target.*/, {
  images: ["car.jpg", "flower.jpg", "nature.jpg"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});

const starefect = function (place, classname) {
  const starCount = 100;
  const preloader = document.getElementById("preloader");
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add(classname);
    const size = Math.random() * 10 + 1;
    star.style.width = `${size}px`
    star.style.height = `${size}px`
    star.style.top = `${Math.random() * window.innerHeight}px`
    star.style.left = `${Math.random() * window.innerWidth}px`
    place.appendChild(star);
    console.log("staradded:", i)
    gsap.to(star, {
      opacity: Math.random(),
      duration: Math.random() * 1 + 1,
      repeat: -1,
      zIndex: 99,

      yoyo: true,
      ease: "sine.inOut",
    })
  }
}
const mainful = document.getElementById("mainful");
starefect(body, "star")

