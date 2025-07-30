// script.js

document.addEventListener("DOMContentLoaded", () => {
  // 1) Dark mode toggle
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "🌙";
  toggleButton.style.position = "fixed";
  toggleButton.style.bottom = "20px";
  toggleButton.style.right = "20px";
  toggleButton.style.padding = "8px 12px";
  toggleButton.style.borderRadius = "8px";
  toggleButton.style.backgroundColor = "#333";
  toggleButton.style.color = "#fff";
  toggleButton.style.border = "none";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.zIndex = "1000";
  document.body.appendChild(toggleButton);

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    const theme = document.documentElement.classList.contains("dark-mode")
      ? "dark"
      : "light";
    localStorage.setItem("theme", theme);
  });

  // 2) Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3) Animação de entrada ao dar scroll (scroll reveal)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".fade-section").forEach((section) => {
    observer.observe(section);
  });
});
