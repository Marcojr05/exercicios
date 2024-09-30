function tabuada() {
    let num = document.getElementById("num").value;
    let resul = document.getElementById("resul");

    let tabuada = "<table>";
    for (let i = 1; i <= 10; i++) {
        tabuada += `<tr><td> ${num} x ${i} = </td><td>  ${num * i}</td></td>`;
    }
    tabuada += "</table>";
    resul.innerHTML = tabuada;
}


let soma = 0
function calcularSoma() {
    let valor = document.getElementById("valor").value
    
    soma += Number(valor)

    document.getElementById("valor").value= ""

    document.getElementById("soma").textContent  = "Soma atual: " + soma
}