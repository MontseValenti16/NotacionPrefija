import { Stack } from "../models/Stack.js";

function convert() {
    const infija = document.getElementById('notinfija').value;
    const prefija = infijaprefija(infija);
    document.getElementById("Resultado").innerText= "NOTACIÓN PREFIJA: " + prefija;
}

function precedence(operador) {
    switch (operador) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        case '^':
            return 3;
        default:
            return 0;
    }
}
//hola//
function operadores(char) {
    return precedence(char) > 0;
}

function Parentesis(char) {
    return char === '(' || char === ')';
}

function infijaprefija(infija) {
    const stack = new Stack();
    let prefija = '';

    for (let i = infija.length - 1; i >= 0; i--) {
        const token = infija[i];
        if (Parentesis(token)) {
            if (token === '(') {
                while (!stack.isEmpty() && stack.peek() !== ')') {
                    prefija += stack.pop();
                }
                stack.pop(); 
            } else {
                stack.push(token);
            }
        } else if (operadores(token)) {
            while (!stack.isEmpty() && precedence(stack.peek()) > precedence[token]) {
                prefija += stack.pop();
            }
            stack.push(token);
        } else {
            prefija += token;
        }
    }

    while (!stack.isEmpty()) {
        prefija += stack.pop();
    }

    return prefija.split('').reverse().join('');
}

window.onload = function() {
    window.convert = convert;
};
