// *******VERTICAL SWIPER *******
$(document).ready(function () {
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: {
      sensitivity:3,
      releaseOnEdges: true,
    },
    grabCursor: true,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
 });
});

// *******HERO TYPE EFFECT *******
$(document).ready(function () {
var textWrapper = document.querySelector(' .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: ' .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: ' .line',
    translateX: [0, document.querySelector(' .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 1000,
    delay: 100
  }).add({
    targets: ' .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
    delay: 100,
  });
});


// *******NEWS SWIPER*******
$(document).ready(function () {
var mySwiper = new Swiper('.js-hero-swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.js-hero-swiper-pagination',
  },
});
});




// *******FOOTER*******
$(".menu-activator").on("click", function() {
  $(".contact").toggleClass("menu-one-active");
});

var p = document.createElement("div");
p.innerHTML = "<div style='z-index:100000' id='owlreporter-preloader'><div id='loader'></div><div class='loader-section section-left'></div><div class='loader-section section-right'></div></div>";
document.body.insertBefore(p, document.body.firstChild);
function pageload(){var e=(new Date).getTime(),t=(e-before)/1e3,n=document.getElementById("loadingtime");n.innerHTML="Page load: "+t+" seconds."}window.onload=function(){pageload()},setTimeout(function(){document.body.className+=" loaded"},6000),document.addEventListener?document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),domReady()},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),domReady())});

var p = document.createElement("div");
p.innerHTML = "<div style='z-index:100000' id='owlreporter-preloader'><div id='loader'></div><div class='loader-section section-left'></div><div class='loader-section section-right'></div></div>";
document.body.insertBefore(p, document.body.firstChild);

var p = document.createElement("div");
p.innerHTML = "<div style='z-index:100000' id='owlreporter-preloader'><div id='loader'></div><div class='loader-section section-left'></div><div class='loader-section section-right'></div></div>";
document.body.insertBefore(p, document.body.firstChild);
function pageload(){var e=(new Date).getTime(),t=(e-before)/1e3,n=document.getElementById("loadingtime");n.innerHTML="Page load: "+t+" seconds."}window.onload=function(){pageload()},setTimeout(function(){document.body.className+=" loaded"},1500),document.addEventListener?document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),domReady()},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),domReady())});

function pageload(){var e=(new Date).getTime(),t=(e-before)/1e3,n=document.getElementById("loadingtime");n.innerHTML="Page load: "+t+" seconds."}window.onload=function(){pageload()},setTimeout(function(){document.body.className+=" loaded"},2500),document.addEventListener?document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),domReady()},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),domReady())});