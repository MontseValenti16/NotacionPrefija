import { Stack } from "./Stack.js";
export class Conversion {
    
    precedence(operador) {
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
    operadores(char) {
        return this.precedence(char) > 0;
    }

    Parentesis(char) {
        return char === '(' || char === ')';
    }
    infijaprefija(infija) {
        const stack = new Stack(); 
        let prefija = '';

        for (let i = infija.length - 1; i >= 0; i--) {
            const token = infija[i];
            if (this.Parentesis(token)) {
                if (token === '(') {
                    while (!stack.isEmpty() && stack.peek() !== ')') {
                        prefija += stack.pop();
                    }
                    stack.pop();
                } else {
                    stack.push(token);
                }
            } else if (this.operadores(token)) {
                while (!stack.isEmpty() && this.precedence(stack.peek()) > this.precedence(token)) {
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
}