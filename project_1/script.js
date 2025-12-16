console.log("script.js is running");

const dateElement = document.querySelector("#date");

if (dateElement) {
  const currentDate = new Date().toLocaleDateString();
  dateElement.textContent = currentDate;
}
