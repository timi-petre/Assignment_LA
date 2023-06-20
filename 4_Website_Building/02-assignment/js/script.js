'use strict';

window.addEventListener('load', () => {
	const myForm = document.getElementById('myForm');
	const nameUser = 'new_user';
	const passwordUser = '1';

	const username = document.getElementById('username');
	const password = document.getElementById('password');

	let message = document.getElementById('msg');
	message.textContent = '';
	let arryMessage = [];

	function showError(input, msg) {
		const formGroup = input.parentElement;
		formGroup.className = 'form-group error';
		arryMessage.push(msg);
		message.textContent = [...new Set(arryMessage)]
			.map((item, index) => {
				return `${index + 1}. ${item
					.charAt(0)
					.toUpperCase()}${item.slice(1)}`;
			})
			.join('\n');
		return false;
	}
	function showSuccess(inputArray) {
		inputArray.forEach(input => {
			const formGroup = input.parentElement;
			formGroup.className = 'form-group success';
			message.textContent = '';
			arryMessage = [];
		});
	}

	function checkUsername(input) {
		if (input.value.trim() === '') {
			showError(input, `please enter ${input.id}`);
		} else if (input.value.trim() !== nameUser) {
			showError(input, `please enter a valid ${input.id}`);
		} else {
			showSuccess([input]);
		}
	}

	function checkPassword(input) {
		if (input.value.trim() === '') {
			showError(input, `please enter ${input.id}`);
		} else if (input.value.trim() !== passwordUser) {
			showError(input, `please enter a valid ${input.id}`);
		} else {
			showSuccess([input]);
		}
	}

	function succesfulLogin(
		showSuccess,
		username,
		password,
		arryMessage,
		message,
		myForm,
	) {
		showSuccess([username, password]);
		let mesaj = 'Successful login!';
		arryMessage.unshift(mesaj);
		message.textContent = [...new Set(arryMessage)].splice(0, 1);
		myForm.insertAdjacentElement('beforerend', message.textContent);
	}

	myForm.addEventListener('submit', e => {
		e.preventDefault();

		if (
			username.value.trim() === nameUser &&
			password.value.trim() === passwordUser
		) {
			succesfulLogin(
				showSuccess,
				username,
				password,
				arryMessage,
				message,
				myForm,
			);
		} else {
			message.textContent = '';
			arryMessage = [];
			checkUsername(username);
			checkPassword(password);
		}
	});
	username.addEventListener('blur', () => checkUsername(username));
	password.addEventListener('blur', () => checkPassword(password));
});
