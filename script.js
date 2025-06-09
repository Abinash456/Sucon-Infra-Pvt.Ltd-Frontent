var crsr = document.querySelector("#cursor");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  
});
const toggleBtn=document.querySelector("#toggle-btn");
const moreText=document.querySelector("#more-text");
const short=document.querySelector("#short-text");

toggleBtn.addEventListener('click', function () {
    if (moreText.style.display === 'none') {
      moreText.style.display = 'inline';
      toggleBtn.textContent = 'Read Less';
    } else {
      moreText.style.display = 'none';
      toggleBtn.textContent = 'Read More';
    }
  });
gsap.to("#nav", {
    backgroundColor:"#000",
    height:"80px",
    duration:0.5,
    scrollTrigger:{
        Trigger:"nav",
        Scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,

    } 
});

gsap.to("#main", {
  backgroundColor: "#bdc3c7 ",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
