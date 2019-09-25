let scrollPos = 5;
const cloudSection = document.querySelector(".c-main-section__cloud")
function checkPosition() {
  let windowY = window.scrollY;
  if (windowY > scrollPos) {
    cloudSection.classList.add("c-main-section__cloud-animation-right");
  }
  scrollPos = windowY;
}
document.addEventListener('scroll', checkPosition);
