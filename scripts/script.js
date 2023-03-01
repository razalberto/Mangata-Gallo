window.onscroll = myFunction;
let mybutton = document.querySelector(".back-to-top");

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
let mainContent = document.getElementById("main");

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    main.classList.add("content");
  } else {
    navbar.classList.remove("sticky");
    main.classList.remove("content");
  }

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function next() {
  let first = document.getElementById("first");
  let second = document.getElementById("second");
  let third = document.getElementById("third");
  let fourth = document.getElementById("fourth");
  if (window.innerWidth <= 768) {
    if (fourth.nextElementSibling) {
      first.id = "";
      second.id = "first";
      third.id = "second";
      fourth.id = "third";
      fourth.nextElementSibling.id = "fourth";
    } else {
      first.style.display = "none";
    }
  } else {
    if (fourth.nextElementSibling) {
      first.id = "";
      second.id = "first";
      third.id = "second";
      fourth.id = "third";
      fourth.nextElementSibling.id = "fourth";
    }
  }
}
function prev() {
  let first = document.getElementById("first");
  let second = document.getElementById("second");
  let third = document.getElementById("third");
  let fourth = document.getElementById("fourth");

  if (window.innerWidth <= 768) {
    if (first.style.display == "none") {
      first.style = "";
    } else {
      if (
        first.previousElementSibling != null &&
        first.previousElementSibling.type != "button"
      ) {
        first.previousElementSibling.id = "first";
        first.id = "second";
        second.id = "third";
        third.id = "fourth";
        fourth.id = "";
      }
    }
  } else {
    if (
      first.previousElementSibling != null &&
      first.previousElementSibling.type != "button"
    ) {
      first.previousElementSibling.id = "first";
      first.id = "second";
      second.id = "third";
      third.id = "fourth";
      fourth.id = "";
    }
  }
}
