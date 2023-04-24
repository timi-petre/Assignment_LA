'use strict';

const op = '+';
const a = +prompt('Primul numar: ', 3);
const result = prompt('Operatia: ', op);
const b = +prompt('Al doilea numar: ', 10);

if (!isNaN(a) && !isNaN(b)) {
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
			if (a == 0 && b == 0) {
				alert(`${a} / ${b} = Result is undefined`);
			} else if (b == 0) {
				alert(`${a} / ${b} = Cannot divide by zero`);
			} else {
				alert(`${a} / ${b} = ${a / b}`);
			}
			break;

		default:
			alert(`Operatie Invalida`);
			break;
	}
} else {
	alert(`Te rog introdu numai numere`);
}
