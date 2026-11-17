document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("newUser").value;
      const email = document.getElementById("email").value;
      const pass = document.getElementById("newPass").value;
      const confirmPass = document.getElementById("confirmPass").value;

      if (!user || !email || !pass || !confirmPass) {
        alert("Por favor complete todos los campos");
      } else if (pass !== confirmPass) {
        alert("Las contraseñas no coinciden");
      } else {
        alert("Cuenta creada para " + user);
      }
    });
  }
});
