document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const navbar = document.querySelector(".navbar");
 
    if (!navbar) return;
 
    
    const enRecursos = /\/Recursos\//i.test(window.location.pathname);
    const basePath = enRecursos ? "../" : "";
 
    const btnLogin = navbar.querySelector(".btn-login");
 
   
    if (!currentUser || !btnLogin) return;
 
    const nombreCompleto = currentUser.nombre || "Usuario";
    const primerNombre = nombreCompleto.trim().split(" ")[0];
    const inicial = nombreCompleto.trim().charAt(0).toUpperCase() || "U";
    const correo = currentUser.correo || "";
 
    const perfilContainer = document.createElement("div");
    perfilContainer.className = "perfil-container";
    perfilContainer.innerHTML = `
        <button type="button" class="btn-perfil" id="btnPerfil" aria-haspopup="true" aria-expanded="false">
            <span class="avatar-circulo">${inicial}</span>
            <span class="perfil-nombre">${primerNombre}</span>
            <i class="fa-solid fa-chevron-down perfil-flecha"></i>
        </button>
 
        <div class="perfil-menu" id="perfilMenu">
            <div class="perfil-menu-header">
                <span class="avatar-circulo grande">${inicial}</span>
                <div class="perfil-menu-datos">
                    <p class="perfil-menu-nombre">${nombreCompleto}</p>
                    <p class="perfil-menu-correo">${correo}</p>
                </div>
            </div>
 
            <hr>
 
            <a href="${basePath}cuenta.html" class="perfil-menu-item">
                <i class="fa-solid fa-user"></i> Ver mi cuenta
            </a>
 
            <button type="button" class="perfil-menu-item perfil-menu-logout" id="btnLogout">
                <i class="fa-solid fa-right-from-bracket"></i> Cerrar sesión
            </button>
        </div>
    `;
 
    btnLogin.replaceWith(perfilContainer);
 
    const btnPerfil = document.getElementById("btnPerfil");
    const perfilMenu = document.getElementById("perfilMenu");
    const btnLogout = document.getElementById("btnLogout");
 
   
    btnPerfil.addEventListener("click", (e) => {
        e.stopPropagation();
        const abierto = perfilMenu.classList.toggle("activo");
        btnPerfil.setAttribute("aria-expanded", abierto ? "true" : "false");
    });

    document.addEventListener("click", (e) => {
        if (!perfilContainer.contains(e.target)) {
            perfilMenu.classList.remove("activo");
            btnPerfil.setAttribute("aria-expanded", "false");
        }
    });
 
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            perfilMenu.classList.remove("activo");
            btnPerfil.setAttribute("aria-expanded", "false");
        }
    });
 
    btnLogout.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = `${basePath}inicio.html`;
    });
});
 