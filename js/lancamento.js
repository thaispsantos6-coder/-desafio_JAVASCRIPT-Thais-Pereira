// ===============================
// Classe Car
// ===============================
class Car {
    constructor(model, price, power, zeroToHundred, image) {
        this.model = model;
        this.price = price;
        this.power = power;
        this.zeroToHundred = zeroToHundred;
        this.image = image;
    }
}

// Array para armazenar os carros selecionados para comparar
let compareArr = [];

// ===============================
// Função para adicionar/remover carros do compare
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
        compareArr = compareArr.filter(item => item !== car);
    }
}

// ===============================
// Mostrar a tela de comparação
// ===============================
function ShowCompare() {
    if (compareArr.length < 2) {
        alert("Selecione 2 veículos para comparar!");
        return;
    }
    document.getElementById("compare").style.display = "block";
    UpdateCompareTable();
}

// Fechar comparação
function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

// ===============================
// Atualizar os dados na tabela de comparação
// ===============================
function UpdateCompareTable() {
    document.getElementById("img1").src = compareArr[0].image;
    document.getElementById("img2").src = compareArr[1].image;
    document.getElementById("model1").innerText = compareArr[0].model;
    document.getElementById("model2").innerText = compareArr[1].model;
    document.getElementById("price1").innerText = compareArr[0].price;
    document.getElementById("price2").innerText = compareArr[1].price;
    document.getElementById("power1").innerText = compareArr[0].power;
    document.getElementById("power2").innerText = compareArr[1].power;
    document.getElementById("accel1").innerText = compareArr[0].zeroToHundred;
    document.getElementById("accel2").innerText = compareArr[1].zeroToHundred;
}
