currentUrl = window.location.href;
var navLinks = document.getElementsByClassName("nav-links");

var currentURL = window.location.href;

var navLinks = document.getElementsByClassName('nav-links');

for (var i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === currentURL) {
    navLinks[i].classList.add('active');
  }
}