// Seleciona a caixa da galeria
const galeria = document.querySelector(".galeria");

// Ouve o movimento da "rodinha" do mouse (wheel)
galeria.addEventListener("wheel", (evento) => {
    
    // Proíbe o site de descer (comportamento padrão)
    evento.preventDefault();

    // Pega o movimento vertical e transforma em horizontal
    // O número 3 é a velocidade. Se quiser mais rápido, aumente.
    galeria.scrollLeft += evento.deltaY * 3;
});