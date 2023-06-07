
let button = document.querySelector("#button");
let sidebar = document.querySelector(".sidebar");

button.onclick = function() {
  sidebar.classList.toggle("active");
};