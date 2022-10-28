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

// popup image
let myimages = Array.from(document.querySelectorAll(".images img"));
let boxPort = document.querySelector(".box-portfolio");
for (let i = 0; i < myimages.length; i++) {
  myimages[i].addEventListener("click", shoBox);
}

function shoBox(e) {
  boxPort.style.transform = "scale(1,1)";
  let imgSrc = e.target.src;
  boxPort.firstElementChild.style.backgroundImage = "url(" + imgSrc + ")";
}
