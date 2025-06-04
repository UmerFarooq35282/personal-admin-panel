const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const sidebar = document.getElementById("sidebar");

// Load saved theme
function setInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    document.documentElement.classList.remove("dark");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
}

function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeIcon.classList.toggle("fa-moon");
  themeIcon.classList.toggle("fa-sun");
}

// Show/hide sidebar on mobile
mobileMenuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

themeToggle.addEventListener("click", toggleDarkMode);
setInitialTheme();
