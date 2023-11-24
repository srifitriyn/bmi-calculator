let height = document.getElementById("height");
let weight = document.getElementById("weight");
let resultArea = document.querySelector(".result-comment");
let form = document.getElementById("form");
let resetButton = document.getElementById("reset");
let calculateButton = document.getElementById("calculate")

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateNumber();
    calculate();
});
calculateButton.addEventListener('click', function() {
    validateNumber();
})
const validateNumber = () => {
    let p = [height.value, weight.value];
    if (p <= 0) {
        return false;
    } else {
        calculate();
    }
    resultArea.style.display = "block";
    document.querySelector(".result-comment").innerHTML = "Please input a valid number";
    document.querySelector("#result").innerHTML = "Error";
}
const calculate = () => {
    let p = [height.value, weight.value];
    let bmi = Number(p[1])/(Number(p[0])/100*Number(p[0])/100);
    let result = '';
    if(bmi<18.5){
        result = 'Underweight';
    } else if(18.5<=bmi&&bmi<=24.9){
        result = 'Healthy';
    } else if(25<=bmi&&bmi<=29.9){
        result = 'Overweight';
    } else if(30<=bmi){
        result = 'Obese';
    }
    resultArea.style.display = "block";
    document.querySelector(".result-comment").innerHTML = `You are <span class="result-comment">${result}</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2); 
}
resetButton.addEventListener('click', function() {
    document.querySelector(".result-comment").innerHTML = "";
    document.querySelector("#result").innerHTML = "00.00"; 
})