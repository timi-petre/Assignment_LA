'use strict';

const op = '+';
const a = +prompt('Primul numar: ', 3);
const result = prompt('Operatia: ', op);
const b = +prompt('Al doilea numar: ', 10);

if (
	typeof a === 'number' &&
	!Number.isNaN(a) &&
	typeof b === 'number' &&
	!Number.isNaN(b)
) {
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
			if (a != 0 && b != 0) {
				alert(`${a} / ${b} = ${a / b}`);
			} else {
				alert(`${a} / ${b} = 0`);
			}
			break;

		default:
			alert(`Te rog introdu date corecte!`);
			break;
	}
} else {
	alert(`Te rog introdu numai numere`);
}
