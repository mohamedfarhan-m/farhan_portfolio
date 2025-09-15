// gsap.to(".loading-bar::after", {
//   width: "100%", 
//   duration: 2, 
//   ease: "power2.inOut"
// });
const body = document.body;

gsap.to("#spacecraft", {
  y:-500,
  delay:1,
  duration:0.5,
  
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




document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('text');

  // ✅ Code lines
  const lines = [
    `<span class="keyword">function</span> greet() {`,
    `&nbsp;&nbsp;<span class="keyword">console</span>.log(<span class="string">"hello world"</span>);`,
    `}`,
    `<span class="comment">/* this is my piece of art */</span>`
  ];

  const content = lines.join("<br>"); // ✅ preserve line breaks

  let i = 0;
  let isDeleting = false;
  const typeSpeed = 45;
  const deleteSpeed = 30;
  const pauseTime = 1000;

  function type() {
    target.innerHTML = content.slice(0, i);

    if (!isDeleting) {
      i++;
      if (i > content.length) {
        isDeleting = true;
        setTimeout(type, pauseTime); // pause before deleting
        return;
      }
    } else {
      i--;
      if (i < 0) {
        isDeleting = false;
        setTimeout(type, pauseTime); // pause before typing again
        return;
      }
    }

    setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
  }

  // ✅ Trigger typing effect only when #text comes into view
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: "#text",   // element to watch
    start: "top 80%",   // when it enters viewport
    once: false,        // allow repeating if you scroll out & in again
    onEnter: () => type()
  });
});



const row = document.querySelector(".scroll");
gsap.to(row,{
    x:-row.scrollWidth/2,
    ease:"none",
    duration:15,
    repeat:-1,

})


    Shery.mouseFollower();
Shery.makeMagnet(".magnet", {
    ease:"powe3.out",
    ease:"elastic.out(1,0.3)"
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

const starefect = function(place,classname){
  const starCount = 150;
const preloader = document.getElementById("preloader");
for(let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add(classname);
  const size=Math.random()*6+1; 
  star.style.width = `${size}px`
  star.style.height=`${size}px`
  star.style.top = `${Math.random()*window.innerHeight}px`
  star.style.left =`${Math.random()*window.innerWidth}px`
 place.appendChild(star);
 console.log("staradded:",i)
  gsap.to(star, {
    opacity:Math.random(),
    duration:Math.random()*4+1, 
    repeat:-1,
    zIndex:99,
    
    yoyo:true,
    ease:"sine.inOut",
  })
}
}
const mainful = document.getElementById("mainful");
starefect(preloader,"star")
starefect(body,"star")

