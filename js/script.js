var link = document.querySelector(".main-nav__togle");
var popupList = document.querySelector(".site-list");

link.addEventListener('click', function () {
  link.classList.toggle("main-nav__togle--close");
  popupList.classList.toggle("site-list--active")
});
