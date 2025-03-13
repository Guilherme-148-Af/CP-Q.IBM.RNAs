document.addEventListener("DOMContentLoaded", function () {
    // Animação de fade-in ao carregar os cards
    let cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = "opacity 1.5s ease-in-out";
            card.style.opacity = 1;
        }, 200 * index);
    });

    // Efeito de zoom nas imagens ao passar o mouse
    let imagens = document.querySelectorAll(".card img");
    imagens.forEach(imagem => {
        imagem.style.transition = "transform 0.3s ease";
        imagem.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
        });
        imagem.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
