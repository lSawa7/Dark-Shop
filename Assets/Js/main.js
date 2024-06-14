let loader = document.querySelector('.ploader');
window.onload = ()=> {
  loader.classList.add('loaded')
}

// Mune Media
let menu = document.querySelector(".toggle");
menu.onclick = () => {
  document.querySelectorAll(".toggle span").forEach((e) => {
    e.classList.toggle("tog");
  });
  document.querySelector(".links").classList.toggle("height");
  document.querySelector(".links ul").style.opacity = "1";
};

window.onscroll = () => {
  // Header_
  if (window.pageYOffset >= 20) {
    document.querySelector("header").style.cssText = document.querySelector(
      "header"
    ).style.cssText =
      "background-color:rgba(93, 88, 81,.7);position:sticky; top:0;";
  } else {
    document.querySelector("header").style.cssText =
      "background-color:transparent;transition:.3s; position:static";
  }
};

//Right Bar
let settingBox = document.querySelector(".setting-box i");
settingBox.onclick = () => {
  document.querySelector(".setting-box").classList.toggle("open");
};
//custsome color
let colors = document.querySelectorAll(".setting-box .lists ul li");
colors.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
  });
});
