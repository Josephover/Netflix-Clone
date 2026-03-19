document.addEventListener("DOMContentLoaded", () => {
    function initializeCarrusel(carruselId, prevId, nextId) {
        const carrusel = document.getElementById(carruselId);
        const prevButton = document.getElementById(prevId);
        const nextButton = document.getElementById(nextId);

        let currentPosition = 0;
        const itemWidth = 18;
        const shift = itemWidth * 3.1;
        const maxPosition = 1;

        function updateButtons() {
            prevButton.classList.toggle("oculto", currentPosition === 0);
            nextButton.classList.toggle("oculto", currentPosition === maxPosition);
        }

        nextButton.addEventListener("click", () => {
            if (currentPosition < maxPosition) {
                currentPosition++;
                carrusel.style.transform = `translateX(-${currentPosition * shift}%)`;
                updateButtons();
            }
        });

        prevButton.addEventListener("click", () => {
            if (currentPosition > 0) {
                currentPosition--;
                carrusel.style.transform = `translateX(-${currentPosition * shift}%)`;
                updateButtons();
            }
        });

        updateButtons();
    }

    // Inicializar ambos carruseles
    initializeCarrusel("carrusel1", "prev1", "next1");
    initializeCarrusel("carrusel2", "prev2", "next2");
    initializeCarrusel("carrusel3", "prev3", "next3");
});