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


let saldo = 0;

function calculaSaldo() {
    // Limpa a resposta anterior
    document.getElementById("resposta3").innerHTML = "";

    // Captura o valor e a operação
    let valor1 = Number(document.getElementById("valor3").value);
    let operar = document.getElementById("op").value;

    // Atualiza o saldo com base na operação
    if (operar === "debito") {
        saldo -= valor1;
    } else {
        saldo += valor1;
    }

    // Exibe o saldo total
    document.getElementById("resposta3").innerHTML = "Valor total: " + saldo;
}



let totalAulas = 0;
let presencas = 0;

function registrarAulas() {
    totalAulas = Number(document.getElementById("aulas").value);
    presencas = 0; // Reseta as presenças
    const aulasInput = document.getElementById("aulasInput");
    aulasInput.innerHTML = ""; // Limpa entradas anteriores

    for (let i = 1; i <= totalAulas; i++) {
        aulasInput.innerHTML += `
            <label>Aula ${i}:</label>
            <select id="aula${i}">
                <option value="presente">Presente</option>
                <option value="ausente">Ausente</option>
            </select><br>`;
    }

    document.getElementById("registro").style.display = "block";
}

function calcularFrequencia() {
    for (let i = 1; i <= totalAulas; i++) {
        const estado = document.getElementById(`aula${i}`).value;
        if (estado === "presente") {
            presencas++;
        }
    }

    const frequencia = (presencas / totalAulas) * 100;
    let resultado = `Frequência: ${frequencia.toFixed(2)}%<br>`;
    resultado += (frequencia >= 75) ? "Aluno Aprovado!" : "Aluno Reprovado!";

    document.getElementById("resposta4").innerHTML = resultado;
}




function calcProgGeom() {
    let inicio = Number(document.getElementById("inicio").value)
    let passo = Number(document.getElementById("passo").value)
    let repeticoes = Number(document.getElementById("repeticoes").value)

    let result = inicio;
    document.getElementById("progGeom").innerHTML = "";

    for(let i = 0; i < repeticoes; i++){
        document.getElementById("progGeom").innerHTML += `<p>${result}<p>`; result *= passo;
    }
}


document.getElementById('generate').addEventListener('click', function() {
    let fibonacci = [0, 1];
    const limit = 34;

    for (let i = 2; fibonacci[i - 1] + fibonacci[i - 2] <= limit; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    const result = fibonacci.filter(num => num <= limit).join(', ');
    document.getElementById('result').innerText = 'Sequência de Fibonacci: ' + result;
});


document.getElementById('calculate').addEventListener('click', function() {
    const inputValue = document.getElementById('nume').value;
    const nume = parseInt(inputValue); // Tenta converter a entrada em um número

    // Se o número não for válido ou se for negativo, não calcula o fatorial
    const isValid = !isNaN(nume) && nume >= 0;

    let factorial = 1;

    for (let i = 1; i <= nume && isValid; i++) {
        factorial *= i;
    }

    const resultText = isValid 
        ? 'Fatorial de ' + nume + ': ' + factorial 
        : 'Por favor, insira um número não negativo.';

    document.getElementById('resulta').innerText = resultText;
});