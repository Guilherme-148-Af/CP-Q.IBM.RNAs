document.addEventListener("DOMContentLoaded", function () {
    // Adiciona animação de fade-in ao carregar a página
    let cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = "opacity 1.5s ease-in-out";
            card.style.opacity = 1;
        }, 200 * index);
    });
});
