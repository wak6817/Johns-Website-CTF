function login() {
  const usernameInput = document.getElementById("username").value.trim();
  const passwordInput = document.getElementById("password").value.trim();
  const output = document.getElementById("output");

  if (!usernameInput || !passwordInput) {
    output.textContent = "Need both fields before trying to log in.";
    output.className = "output error";
    return;
  }

  const body = document.body;
  const encodedCreds = body.dataset.creds || body.getAttribute("creds") || "";
  const decodedCreds = atob(encodedCreds);
  const [storedUsername, storedPassword] = decodedCreds.split(":");

  if (usernameInput === storedUsername && passwordInput === storedPassword) {
    output.textContent = "Access granted. The site is yours.";
    output.className = "output success";
    return;
  }

  output.textContent = "Nope. Try looking around the page for the real clue.";
  output.className = "output error";
}
