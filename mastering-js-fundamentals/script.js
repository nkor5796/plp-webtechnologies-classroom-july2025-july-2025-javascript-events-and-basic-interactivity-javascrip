// =====================
// Part 1: Event Handling
// =====================
const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

// Button click event
welcomeBtn.addEventListener("click", () => {
  welcomeMessage.textContent = "👋 Hello there! Thanks for clicking!";
});

// Live typing event
liveInput.addEventListener("keyup", () => {
  liveOutput.textContent = `Nice to meet you, ${liveInput.value}! 🌟`;
});

// =====================
// Part 2: Interactive Elements
// =====================

// Dark/Light Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = 
    document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Counter Game
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");

counterBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

// Collapsible FAQ
const questions = document.querySelectorAll(".faq-question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// =====================
// Part 3: Form Validation
// =====================
const registerForm = document.getElementById("registerForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Name validation
  if (nameField.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
  if (!emailRegex.test(emailField.value)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (passwordField.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success
  if (valid) {
    successMessage.textContent = "✅ Registration successful!";
    registerForm.reset();
  }
});
