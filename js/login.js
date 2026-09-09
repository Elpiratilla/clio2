document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("loginForm");


    if (!formulario) return;


    formulario.addEventListener("submit", function (e) {
        e.preventDefault();


        const correoInput = document.getElementById("correo") || document.getElementById("email");
        const passwordInput = document.getElementById("password");


        const correo = correoInput ? correoInput.value.trim() : "";
        const password = passwordInput ? passwordInput.value.trim() : "";


        if (correo === "" || password === "") {
            alert("Completa todos los campos.");
            return;
        }


        const usuarios = JSON.parse(localStorage.getItem("clioUsers")) || [];


        const usuario = usuarios.find(user =>
            user.correo.toLowerCase() === correo.toLowerCase() &&
            user.password === password
        );


        if (usuario) {
            localStorage.setItem("currentUser", JSON.stringify(usuario));
            window.location.href = "inicio.html";
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    });
});
