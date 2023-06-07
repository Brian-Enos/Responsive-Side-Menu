
let button = document.querySelector("#button");
let sidebar = document.querySelector(".navbar");

button.onclick = function() {
  sidebar.classList.toggle("active");
}