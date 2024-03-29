//Selecting the form 
const entireForm = document.getElementById('div-yield-form');

//Selecting submit button
const submit = document.getElementById('submit-btn');

//Selecting the results box and inside paragraph
const resultBox = document.getElementById('result-box');
const results = document.getElementById('results');

//Number of times the dividends are compounded
const n = 4;

//To stop form from refreshing page
function handleForm(event) {
    event.preventDefault();
}

entireForm.addEventListener('submit', handleForm);

//The actual function

let finalAmount; 

function dividendCompound() {
    const initial = document.getElementById('initial-inv').value;
    const divYield = document.getElementById('yield').value;
    const years = document.getElementById('inv-duration').value;
    finalAmount = initial * (Math.pow((1 + (divYield / n)), (n * years)));
    console.log(finalAmount);
    resultBox.style.display = 'block';
    results.innerHTML = `By the end of ${years} year(s), 
    you will have <br> <strong>$${addCommas(finalAmount.toFixed(2))}</strong>, 
    meaning a(n) <strong>${addCommas(Math.floor((finalAmount / initial - 1) * 100))}% gain</strong>.`;
}

submit.addEventListener('click', dividendCompound);

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
