const message = document.getElementById("message");

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;

  const data = await login(email, password);
  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } else {
    message.textContent = data.message || "Login failed";
  }
});

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = registerEmail.value;
  const password = registerPassword.value;

  const data = await register(email, password);
  message.textContent = data.message || "Register failed";
});

