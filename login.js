document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");

  const form = document.querySelector("#form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
