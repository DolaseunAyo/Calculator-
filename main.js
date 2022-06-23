const operator = prompt('Pick an operator, +,-,*,/,%')

const firstnum = parseInt(window.prompt('Enter first number'))
const secondnum = parseInt(window.prompt('Enter second number'))


let result;

if (operator == '+'){
    result = (firstnum + secondnum);
} else if (operator == '-'){
    result = (firstnum - secondnum);
} else if (operator == '*'){
    result = (firstnum * secondnum);
} else if (operator == '/'){
    result = (firstnum / secondnum);
} else if (operator == '%') {
    result = (firstnum % secondnum);
} else {
    result = ('Invalid choice of operator');
}

alert(result);