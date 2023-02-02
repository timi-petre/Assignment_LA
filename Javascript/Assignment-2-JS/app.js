'use strict';

const op = '+';
const a = +prompt('Primul numar: ', 3);
const result = prompt('Operatia: ', op);
const b = +prompt('Al doilea numar: ', 10);

switch (result) {
	case '+':
		alert(`${a} + ${b} = ${a + b}`);
		break;
	case '-':
		alert(`${a} - ${b} = ${a - b}`);
		break;
	case '*':
		alert(`${a} * ${b} = ${a * b}`);
		break;
	case '/':
		alert(`${a} / ${b} = ${a / b}`);
		break;

	default:
		break;
}
