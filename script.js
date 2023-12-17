document.addEventListener('DOMContentLoaded', function(){
    converter();
    document.querySelector('button').addEventListener('click', convertCurrency);
});

function converter(){
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    fetch("https://open.er-api.com/v6/latest")
        .then(response => response.json())
        .then(data => {
            fromCurrencySelect.innerHTML = "";
            toCurrencySelect.innerHTML = "";

            for (const currency in data.rates) {
                const option = document.createElement('option'); 
                option.value = currency;
                option.text = currency;
                fromCurrencySelect.add(option.cloneNode(true));
                toCurrencySelect.add(option);    
            }
        })
        .catch(error => console.error('Error fetching currencies:', error));
}

function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);

    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const result = amount * exchangeRate;

      
            const resultElement = document.getElementById("result");
            if (resultElement) {
                resultElement.textContent = `Result: ${result.toFixed(2)} ${toCurrency}`;
            } else {
                console.error("Error: Result element not found.");
            }
        })
        .catch(error => console.error("Error fetching exchange rate:", error));
}
