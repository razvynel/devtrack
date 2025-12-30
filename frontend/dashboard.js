import { getProtected } from "./authApi.js";

console.log("dashboard.js loaded");

document.addEventListener("DOMContentLoaded", async () => {
  const status = document.getElementById("status");
  const logoutBtn = document.getElementById("logout");

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "index.html";
    return;
  }

  try {
    const data = await getProtected(token);

    if (data.message === "Access granted") {
      status.textContent = "Autentificat cu succes ✅";
    } else {
      throw new Error("Unauthorized");
    }
  } catch {
    localStorage.removeItem("token");
    window.location.href = "index.html";
    return;
  }

  logoutBtn.addEventListener("click", () => {
    console.log("Logout clicked");
    localStorage.removeItem("token");
    window.location.href = "index.html";
  });
});

