document.addEventListener("DOMContentLoaded", e => {
  let el = document.querySelector("nav ul li:last-of-type");
  let em = document.getElementById("navbut");
  let er = document.querySelector("nav ul li:first-of-type");
  let element = document.querySelector("header h1");
  console.log(element);
  let element_2 = document.querySelector("nav");
  
  function shownav() {
    element_2.classList.toggle("show");
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  };

  em.addEventListener("click", () => {
    shownav();
  });
})