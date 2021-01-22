var box = document.getElementsByClassName(box);
var text1 = document.getElementById(text1);

gsap.timeline({
  scrollTrigger:{
    trigger: box,
    start:"center center",
    end:"bottom top",
    markers:  true,
    scrub : true
  }
})
.from( {text1} , {x : innerWidth * 1 })