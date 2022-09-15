const root = document.querySelector("html");
const btnChangeTheme = document.getElementById("btn-change-mode");

btnChangeTheme.addEventListener("click", () => {
  root.classList.toggle("light"); 
});