document.addEventListener("DOMContentLoaded", function () {
    // Animação de fade-in ao carregar a página
    let cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = "opacity 1.5s ease-in-out";
            card.style.opacity = 1;
        }, 200 * index);
    });

    // Efeito de realce nos parágrafos ao clicar
    let paragrafos = document.querySelectorAll(".card p");
    paragrafos.forEach(paragrafo => {
        paragrafo.addEventListener("click", function () {
            this.style.backgroundColor = "#f0f0f0";
            this.style.padding = "5px";
            this.style.borderRadius = "5px";
            setTimeout(() => {
                this.style.backgroundColor = "";
            }, 1000);
        });
    });
});
