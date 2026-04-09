let tempo = 600;
let intervalo;

function atualizar() {
    let min = Math.floor(tempo / 60);
    let seg = tempo % 60;

    document.getElementById("timer").innerText =
        String(min).padStart(2, '0') + ":" +
        String(seg).padStart(2, '0');

    localStorage.setItem("tempo", tempo);
}

function iniciar() {
    intervalo = setInterval(() => {
        if (tempo > 0) {
            tempo--;
            atualizar();
        }
    }, 1000);
}

function pausar() {
    clearInterval(intervalo);
}

function resetar() {
    tempo = 600;
    atualizar();
}

function abrirTelao() {
    window.open("telao.html", "_blank");
}

atualizar();
