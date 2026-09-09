document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");


    if (!form) return;


    form.addEventListener("submit", function (e) {
        e.preventDefault();


        const nombreInput = document.getElementById("nombre");
        const correoInput = document.getElementById("email") || document.getElementById("correo");
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("confirm-password");
        const termsInput = document.getElementById("terms");


        const nombre = nombreInput ? nombreInput.value.trim() : "";
        const correo = correoInput ? correoInput.value.trim() : "";
        const password = passwordInput ? passwordInput.value : "";
        const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : "";


        if (!nombre || !correo || !password || !confirmPassword) {
            alert("Completa todos los campos.");
            return;
        }


        if (termsInput && !termsInput.checked) {
            alert("Debes aceptar los términos y condiciones.");
            return;
        }


        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }


        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }


        let usuarios = JSON.parse(localStorage.getItem("clioUsers")) || [];


        const existe = usuarios.find(user => user.correo.toLowerCase() === correo.toLowerCase());


       
        if (existe) {
            alert("Ese correo ya está registrado. Redirigiendo al inicio de sesión...");
            window.location.href = "login.html";
            return;
        }


        const nuevoUsuario = {
            nombre: nombre,
            correo: correo,
            password: password
        };


        usuarios.push(nuevoUsuario);
        localStorage.setItem("clioUsers", JSON.stringify(usuarios));


        alert("¡Registro exitoso!");
        window.location.href = "login.html";
    });
});
