// FOR TIMER

function countDown(){
    var countDownDate = new Date("Jan 1, 2023 24:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="time"
    document.getElementById("time").innerHTML = days + "d " + " | " + hours + "h " + " | " + minutes + "m " + " | " + seconds + "s ";
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
    }, 1000);
}
countDown();

// FOR BANNER

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000);
}

// FOR NAVBAR
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// **** Scroll Up Button **** //
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    mybutton.style.display = "block";
  } else 
  {
    mybutton.style.display = "none";
  }
}
function topFunction() 
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// PROGRESS
let items = document.querySelectorAll('.progress-item');
const counters = Array(items.length);
const intervals = Array(items.length);
counters.fill(0);
items.forEach((number,index) => {
  intervals[index] = setInterval(() => {
    if(counters[index] == parseInt(number.dataset.num)){
        clearInterval(intervals[index]);
      }else{
        counters[index] += 1;
        number.style.background = "conic-gradient(red calc(" + counters[index] + "%), whitesmoke 0deg)";
        number.setAttribute('data-value', counters[index] + "%");
        number.innerHTML = counters[index] + "%";
          }
  }, 15);
});


// ACTIVE NAV
var btnContainer = document.getElementById("activeNav");

var btns = btnContainer.getElementsByClassName("nav-link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

