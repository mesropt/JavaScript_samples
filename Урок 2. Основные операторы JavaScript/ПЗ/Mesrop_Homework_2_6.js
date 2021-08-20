/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1,
arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с
названием операции. В зависимости от переданного значения операции
выполнить одну из арифметических операций (использовать функции из
пункта 5) и вернуть полученное значение (использовать switch).
 */

function subtraction (a, b) {
    return console.log(a - b);
}

function addition (a, b) {
    return console.log(a + b);
}

function multiplication (a, b) {
    return console.log(a * b);
}

function division (a, b) {
    return console.log(a / b);
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '-':
        case 'вычесть':
            return subtraction(arg1, arg2);
        case '+':
        case 'сложить':
            return addition(arg1, arg2);
        case '*':
        case 'умножить':
            return multiplication(arg1, arg2);
        case '/':
        case 'поделить':
            return division(arg1, arg2);
    }
}

mathOperation(50, 10, '-')