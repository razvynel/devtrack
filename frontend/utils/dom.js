export function setMessage(el, text, isError = false) {
  el.textContent = text;
  el.style.color = isError ? "red" : "green";
}

export function setLoading(button, loading) {
  button.disabled = loading;
  button.textContent = loading ? "Loading..." : button.dataset.text;
}

