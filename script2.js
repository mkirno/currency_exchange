const element1 = document.getElementById('element1'); 

element1.addEventListener('click', mathInConsole);

function mathInConsole(){
    let a = prompt('Enter the first number:');
    let b = prompt('Enter the second number:');

    a = parseInt(a);
    b = parseInt(b);

    if (!isNaN(a) && !isNaN(b)) {
        let result = a + b
        console.log(result)
    } else {
        console.log('Invalid input. Please enter valid numbers and try again.')
    }
};