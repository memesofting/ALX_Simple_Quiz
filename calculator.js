// add numbers
function add(num1, num2)
{
    return (num1 + num2);
}

// subtract numbers
function subtract(num1, num2)
{
    return (num1 - num2);
}

// multiply numbers
function multiply(num1, num2)
{
    return (num1 * num2);
}

// divide numbers
function divide(num1, num2)
{
    return (num1 / num2);
}

document.addEventListener('DOMContentLoaded', function(event)
{
    console.log('DOM loaded successfully');

    // get button elements
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');

    // add click event listener to buttons
    addButton.addEventListener('click', function(){
        const num1 = parseFloat(document.getElementById('number1').value) || 0;
        const num2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = add(num1, num2);
        document.getElementById('calculation-result').textContent = result;
    });
    subtractButton.addEventListener('click', function(){
        const num1 = parseFloat(document.getElementById('number1').value) || 0;
        const num2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = subtract(num1, num2);
        document.getElementById('calculation-result').textContent = result;
    });
    multiplyButton.addEventListener('click', function(){
        const num1 = parseFloat(document.getElementById('number1').value) || 0;
        const num2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = multiply(num1, num2);
        document.getElementById('calculation-result').textContent = result;
    });
    divideButton.addEventListener('click', function(){
        const num1 = parseFloat(document.getElementById('number1').value) || 0;
        const num2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = divide(num1, num2);
        document.getElementById('calculation-result').textContent = result;
    });
});