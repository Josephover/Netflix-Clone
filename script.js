// Manejo de la sesión
function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
        alert("Por favor complete los campos");
        return;
    }
    if (email == "usuario@netflix.com" && password == "12345") {
        alert("Inicio de sesión exitoso");
        // Redirijo a la página principal
        window.location.href = "principal.html";
    } else {
        alert("Correo o contraseña incorrectos");
    }
}
