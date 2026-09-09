document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // Si no hay sesión activa, no dejamos ver esta página
    if (!currentUser) {
        alert("Debes iniciar sesión para ver tu cuenta.");
        window.location.href = "login.html";
        return;
    }

    const nombreCompleto = currentUser.nombre || "Usuario";
    const inicial = nombreCompleto.trim().charAt(0).toUpperCase() || "U";

    document.getElementById("cuentaAvatar").textContent = inicial;
    document.getElementById("cuentaNombre").textContent = `Hola, ${nombreCompleto.split(" ")[0]}`;
    document.getElementById("cuentaNombreCompleto").textContent = nombreCompleto;
    document.getElementById("cuentaCorreo").textContent = currentUser.correo || "—";

    const btnCerrarSesion = document.getElementById("btnCerrarSesionCuenta");
    btnCerrarSesion.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = "inicio.html";
    });
});
