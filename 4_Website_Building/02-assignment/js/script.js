'use strict'

window.addEventListener('load', function () {
	const myForm = document.getElementById('myForm')
	const usernameInput = document.getElementById('username')
	const passwordInput = document.getElementById('password')
	const message = document.getElementById('msg')

	const validUsername = 'new_user'
	const validPassword = '123456789'
	const errorMessages = []

	function showError(inputElement, errorMsg) {
		inputElement.parentElement.classList.add('error')
		inputElement.parentElement.classList.remove('success')
		errorMessages.push(errorMsg)
		message.textContent = errorMessages.join('\n')
	}

	function showSuccess(inputElement) {
		inputElement.parentElement.classList.remove('error')
		inputElement.parentElement.classList.add('success')
		errorMessages.length = 0
		message.textContent = ''
	}

	function checkUsername(inputElement) {
		const enteredUsername = inputElement.value.trim()

		if (enteredUsername === '') {
			showError(inputElement, 'Please enter a username')
		} else if (enteredUsername !== validUsername) {
			showError(inputElement, 'Please enter a valid username')
		} else {
			showSuccess(inputElement)
		}
	}

	function checkPassword(inputElement) {
		const enteredPassword = inputElement.value.trim()
		if (enteredPassword === '') {
			showError(inputElement, 'Please enter a password')
		} else if (enteredPassword !== validPassword) {
			showError(inputElement, 'Please enter a valid password')
		} else {
			showSuccess(inputElement)
		}
	}

	function successfulLogin() {
		showSuccess(usernameInput)
		showSuccess(passwordInput)
		message.textContent = 'Successful login!'
	}

	myForm.addEventListener('submit', function (e) {
		e.preventDefault()
		if (
			usernameInput.value.trim() === validUsername &&
			passwordInput.value.trim() === validPassword
		) {
			successfulLogin()
		} else {
			message.textContent = ''
			errorMessages.length = 0

			checkUsername(usernameInput)
			checkPassword(passwordInput)
		}
	})

	usernameInput.addEventListener('blur', function () {
		checkUsername(usernameInput)
	})

	passwordInput.addEventListener('blur', function () {
		checkPassword(passwordInput)
	})
})
