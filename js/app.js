let controller;
let slideScene;

const headerTimeline = gsap.timeline({
  defaults: { duration: 2.5, ease: "elastic.out(1,0.3)" },
});
const headingText = document.querySelector(".heading-text");
const headerImg = document.querySelector(".header-img");

headerTimeline.fromTo(headingText, { x: "20%" }, { x: "0%" });
headerTimeline.fromTo(headerImg, { x: "20%" }, { x: "0%" }, "-=2.5");

function animateSlides() {
  //Initialize controller
  controller = new ScrollMagic.Controller();
  //Slect Slides
  const sliders = document.querySelectorAll(".slide");
  //loop over each sliders
  sliders.forEach((slide) => {
    const growText = document.querySelector(".grow-text");
    const growImg = document.querySelector(".grow-img");
    const conversationImg = document.querySelector(".conversation-img");
    const conversationText = document.querySelector(".conversation-text");
    const userImg = document.querySelector(".user-img");
    const userText = document.querySelector(".user-text");
    //GSAP
    const slideTimeline = gsap.timeline({
      defaults: { duration: 1, ease: "bounce.out" },
    });

    slideTimeline.fromTo(growText, { scale: 0.5 }, { scale: 1 });
    slideTimeline.fromTo(growImg, { scale: 0.5 }, { scale: 1 }, "-=1");
    slideTimeline.fromTo(conversationText, { scale: 0.5 }, { scale: 1 });
    slideTimeline.fromTo(conversationImg, { scale: 0.5 }, { scale: 1 }, "-=1");
    slideTimeline.fromTo(userText, { scale: 0.5 }, { scale: 1 });
    slideTimeline.fromTo(userImg, { scale: 0.5 }, { scale: 1 }, "-=1");

    //Create Scene
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      .setTween(slideTimeline)
      .addTo(controller);
  });
}

animateSlides();
