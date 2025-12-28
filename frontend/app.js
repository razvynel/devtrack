import { login, register } from "./api/authApi.js";
import { setMessage, setLoading } from "./utils/dom.js";

const message = document.getElementById("message");

const loginBtn = document.querySelector("#loginForm button");
loginBtn.dataset.text = loginBtn.textContent;

const registerBtn = document.querySelector("#registerForm button");
registerBtn.dataset.text = registerBtn.textContent;

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  setLoading(loginBtn, true);

  const email = loginEmail.value;
  const password = loginPassword.value;

  const data = await login(email, password);

  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } else {
    setMessage(message, data.message || "Login failed", true);
  }

  setLoading(loginBtn, false);
});

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  setLoading(registerBtn, true);

  const email = registerEmail.value;
  const password = registerPassword.value;

  const data = await register(email, password);
  setMessage(message, data.message || "Register failed");

  setLoading(registerBtn, false);
});

