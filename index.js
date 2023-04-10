const toggleDarkMode = document.querySelector("#toggle-dark-mode");

toggleDarkMode.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

const isDarkMode = localStorage.getItem("dark-mode") === "true";

if (isDarkMode) {
  document.body.classList.add("dark-mode");
  toggleDarkMode.innerHTML = "Light Mode";
}

toggleDarkMode.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));

  if (document.body.classList.contains("dark-mode")) {
    toggleDarkMode.innerHTML = "Light Mode";
  } else {
    toggleDarkMode.innerHTML = "Dark Mode";
  }
});
