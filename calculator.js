console.log("Javascript Loaded")

const caulculatorDisplay = document.getElementById("calculatorDisplay");

function display(input) {
    caulculatorDisplay.value += input
}

function clearDisplay() {
caulculatorDisplay.value = "";
}

function calculate() {
caulculatorDisplay.value = eval(caulculatorDisplay.value);
}