var link1 = document.querySelector(".main-presentation__btn");
var popupModule = document.querySelector(".modal")
link1.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupModule.classList.add("modal--active")

})
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
