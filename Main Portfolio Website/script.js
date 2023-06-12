window.onload = function () {
  const menu_btn = document.querySelector(".hamburgerMenu");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  mobile_menu.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
};

document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelectorAll("li").forEach((item) => {
      if (item.className === "active") {
        item.classList.remove("active");
      }
    });
    item.classList.add("active");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

let typed = new Typed(".auto-type", {
  strings: [
    "Coder",
    "Thinker",
    "Web Developer",
    "Legend",
    "Gamer",
    "Genius",
    "Problem Solver",
    "Programmer",
    "Part-time Vegan",
  ],
  startDelay: 500,
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 300,
  smartBackspace: true,
  loop: true,
});
