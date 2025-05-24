// Mostrar u ocultar el botón al hacer scroll
window.onscroll = function() {
    const btn = document.getElementById("btn-volver-arriba");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
    } else {
    btn.style.display = "none";
    }
};

// Desplazamiento suave al hacer clic
document.getElementById("btn-volver-arriba").addEventListener("click", function() {
    window.scrollTo({
    top: 0,
    behavior: "smooth"  // Efecto suave
    });
});