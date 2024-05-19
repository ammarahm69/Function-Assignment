let time = () => {
    var now = new Date();
    console.log(now);

}
// time();

let greet = (first, last) => {
    var full = first + ' ' + last
    console.log(full);
}

// greet(prompt('Enter first name') , prompt('Enter last name'));
function sum(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Invalid operation';
    }
}

// const num1 = +prompt('Enter number 1');
// const num2 = +prompt('Enter number 2');
// const operation = prompt('Enter operation (+, -, *, /)');
// const result = sum(num1, num2, operation);

// alert(`${num1} ${operation} ${num2} =  ${result}`);

function sqrt(a) {
    console.log(`Square of ${a} = ${a * a} `)
}
// sqrt(+prompt('Enter number to square'))

// function factorial(n) {
//     var res = 1;
//     for (var i = 1; i <= n; i++) {
//         res *= i;
//     }
//     return res;
// }
// var num = parseInt(prompt('Factorial of'), 10);
// console.log(factorial(num));


// function start(start, end) {
//     for (var i = start; i <= end; i++) {
//         console.log(i);
//     }
// }
// start(+prompt('Enter start number'), +prompt('Enter last number'));
var hypo;
var base = +prompt('Value of base');
var perp = +prompt('Value of perpendicular')
function outer(){
    function inner(){
        console.log(base *base + perp*perp);
    }
    inner(); //(Base + prep)2
}
outer(``) // Calculate Hypotenous