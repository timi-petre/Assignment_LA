const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

const nameUser = 'new_user';
const passwordUser = '123456789';

var smallError = document.getElementById('small');
smallError.textContent = '';

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	smallError.textContent = message;
}

function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	return false;
}

function checkRequired(inputs) {
	inputs.forEach(input => {
		if (input.value.trim() === '') {
			showError(input, `please enter ${input.getAttribute('id')}`);
		}
	});
}

function checkUsername(input) {
	if (input.value.trim() !== nameUser) {
		showError(input, 'please enter a valid username');
	}
}

function checkPassword(input) {
	if (input.value.trim() !== passwordUser) {
		showError(input, 'please enter a valid password');
	}
}
form.addEventListener('submit', e => {
	e.preventDefault();
	checkRequired([username, password]);
	checkUsername(username);
	checkPassword(password);
});
