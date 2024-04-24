// filter image portfolio
let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.querySelectorAll(".images img"));
switcherLis.forEach((li) => {
  li.addEventListener("click", function () {
    // active class
    let activeList = document.querySelector(".active");
    activeList.classList.remove("active");
    let filter = li.getAttribute("data-swit");
    li.classList.add("active");
    // filter img
    imgs.forEach((img) => {
      if (
        img.getAttribute("data-swit") === filter ||
        img.getAttribute("data-item") === filter ||
        filter === ".all"
      ) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});
// ################################################################
// popup image
let myImages = Array.from(document.querySelectorAll(".images img"));
let boxPort = document.querySelector(".box-portfolio");
let text = document.querySelectorAll(".text-img ");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let wind = document.getElementById("window");
let plus = document.getElementById("plus");
let min = document.getElementById("min");
let download = document.getElementById("download");
let imgIndex = 0;
for (let i = 0; i < myImages.length; i++) {
  myImages[i].addEventListener("click", showBox);
}
// show box
function showBox(e) {
  boxPort.style.transform = "scale(1,1)";
  let imgSrc = e.target.src;
  boxPort.firstElementChild.style.backgroundImage = "url(" + imgSrc + ")";
  imgIndex = myImages.indexOf(e.target);
}
//close box
window.onclick = (e) => {
  if (e.target == boxPort) {
    boxPort.style.transform = "scale(0,0)";
  }
};
//next box
next.addEventListener("click", nextBox);
function nextBox() {
  imgIndex++;
  if (imgIndex == myImages.length) {
    imgIndex = 0;
  }
  boxPort.firstElementChild.style.backgroundImage = `url(${myImages[imgIndex].src})`;
}
// previes box
prev.addEventListener("click", prevBox);
function prevBox() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = myImages.length - 1;
  }
  boxPort.firstElementChild.style.backgroundImage = `url(${myImages[imgIndex].src})`;
}
// full screen
wind.addEventListener("click", windowBox);
function windowBox() {
  boxPort.style.transform = "scale(3,1.9)";
}
// zoom out
plus.addEventListener("click", plusBox);
function plusBox() {

}
// zoom in
min.addEventListener("click", minBox);
function minBox() {}
// zoom out
download.addEventListener("click", downloadBox);
function downloadBox() {}
