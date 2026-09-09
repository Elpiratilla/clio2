window.addEventListener("load", () => {
    document.body.style.opacity = "1";
    
    setTimeout(() => {
        tarjetas.forEach((tarjeta) => {
            const posicion = tarjeta.getBoundingClientRect();
            
            if (posicion.top < window.innerHeight) {
                tarjeta.classList.add("mostrar");
            }
        });
    }, 100);
});

const tarjetas = document.querySelectorAll(".card");

const aparecer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
        }
    });
}, { 
    rootMargin: "0px 0px -50px 0px", 
    threshold: 0.05 
});

tarjetas.forEach((tarjeta) => {
    aparecer.observe(tarjeta);
});