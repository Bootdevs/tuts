function toggleNav() {
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
navLinks.classList.toggle('nav-active');
burger.classList.toggle('toggle');
}
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".main-title", 10, { y: -200 }, "-=5")
  .fromTo(".bg1", 3, { y: -50 },{y:0,duration:3}, "-=5")
  .to(".content",3,{top:'0%'}, "-=5")
  .fromTo('.content-images',{opacity:0},{opacity:2,duration :2 })
  .fromTo('.text',{opacity:0},{opacity:1,duration :5 })


let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "250%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);