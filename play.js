//Selecting the form 
const entireForm = document.getElementById('div-yield-form');

//Selecting the inputs
const initField = document.getElementById('initial-inv');
const yieldInput = document.getElementById('yield');
const durationInput = document.getElementById('inv-duration');

//Selecting the results box and inside paragraph
const resultBox = document.getElementById('result-box');
const results = document.getElementById('results');

//Tying things together
const initInvested = initField.value; //Initially invested money
const divYield = yieldInput.value / 100; //For each quarter
const timesCompounded = 4; //For quarterly dividends
const timeInvested = durationInput.value; //Number of quarters

//To stop form from refreshing page
function handleForm(event) {
    event.preventDefault();
}

entireForm.addEventListener('submit', handleForm);

//The actual function

let finalAmount; 

function dividendCompound() {
    finalAmount = initInvested * Math.pow(1 + divYield / timesCompounded, timesCompounded * timeInvested);
    resultBox.style.display = 'block';
    results.innerHTML = `Results: ${finalAmount}`;
}


