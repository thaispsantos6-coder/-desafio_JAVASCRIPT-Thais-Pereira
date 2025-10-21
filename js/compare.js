// ===============================
// Classe Car
// ===============================
class Car {
    constructor(modelo, preco, alturacacamba, alturaveiculo, alturasolo, capacidadecarga, motor, potencia, volumecacamba, roda, imagem) {
        this.modelo = modelo;
        this.preco = preco;
        this.alturacacamba = alturacacamba;
        this.alturaveiculo = alturaveiculo;
        this.alturasolo = alturasolo;
        this.capacidadecarga = capacidadecarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumecacamba = volumecacamba;
        this.roda = roda;
        this.imagem = imagem;
    }
}

let compareArr = [];

// ===============================
// Função para adicionar/remover carros
// ===============================
function SetCarToCompare(checkbox, car) {
    if (checkbox.checked) {
        if (compareArr.length >= 2) {
            alert("Você só pode comparar 2 veículos!");
            checkbox.checked = false;
            return;
        }
        compareArr.push(car);
    } else {
        compareArr = compareArr.filter(c => c !== car);
    }
}

// ===============================
// Mostrar comparação
// ===============================
function ShowCompare() {
    if (compareArr.length < 2) {
        alert("Selecione 2 veículos para comparar!");
        return;
    }
    document.getElementById("compare").style.display = "block";
    UpdateCompareTable();
}

// ===============================
// Fechar popup
// ===============================
function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

// ===============================
// Preencher tabela
// ===============================
function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${compareArr[i].imagem}" width="120">`;
        document.getElementById(`compare_modelo_${i}`).innerText = compareArr[i].modelo;
        document.getElementById(`compare_alturacacamba_${i}`).innerText = compareArr[i].alturacacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = compareArr[i].alturaveiculo;
        document.getElementById(`compare_alturasolo_${i}`).innerText = compareArr[i].alturasolo;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = compareArr[i].capacidadecarga;
        document.getElementById(`compare_motor_${i}`).innerText = compareArr[i].motor;
        document.getElementById(`compare_potencia_${i}`).innerText = compareArr[i].potencia;
        document.getElementById(`compare_volumecacamba_${i}`).innerText = compareArr[i].volumecacamba;
        document.getElementById(`compare_roda_${i}`).innerText = compareArr[i].roda;
        document.getElementById(`compare_preco_${i}`).innerText = "R$ " + compareArr[i].preco;
    }
}
