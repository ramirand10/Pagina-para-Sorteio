let pessoas = ["Raphael", "José", "Igor", "Marcos", "Joana"]

function sortear() {
    let np = pessoas.length;

    let ns = Math.floor(Math.random() * np);

    document.getElementById("d").innerHTML = pessoas[ns];


}