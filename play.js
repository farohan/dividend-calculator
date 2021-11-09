//Selecting the form 
const entireForm = document.getElementById('div-yield-form');

//Selecting submit button
const submit = document.getElementById('submit-btn');

//Selecting the inputs
const initField = document.getElementById('initial-inv');
const yieldInput = document.getElementById('yield');
const durationInput = document.getElementById('inv-duration');

//Selecting the results box and inside paragraph
const resultBox = document.getElementById('result-box');
const results = document.getElementById('results');

//Number of times the dividends are compounded
const timesCompounded = 4;

//To stop form from refreshing page
function handleForm(event) {
    event.preventDefault();
}

entireForm.addEventListener('submit', handleForm);

//The actual function

let finalAmount; 

function dividendCompound() {
    finalAmount = initField.value * Math.pow((1 + yieldInput.value) / timesCompounded, durationInput.value * timesCompounded);
    resultBox.style.display = 'block';
    results.innerHTML = `By the end of ${durationInput.value} quarters, you will have about $${Math.floor(finalAmount)}`;
}

submit.addEventListener('click', dividendCompound);
