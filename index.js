document.addEventListener("DOMContentLoaded", function () {
    // Animação de fade-in para os elementos da página
    document.querySelector(".container").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".container").style.transition = "opacity 1.5s";
        document.querySelector(".container").style.opacity = 1;
    }, 100);

    // Seleciona todos os links e adiciona eventos
    let links = document.querySelectorAll(".link-card a");

    links.forEach(link => {
    });
});
