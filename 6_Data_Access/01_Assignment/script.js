window.addEventListener('DOMContentLoaded', async () => {
	try {
		let response = await fetch('quiz.json')
		if (!response.ok) {
			throw new Error('Error while fetching data')
		}
		let data = await response.json()

		questionsData(data)
	} catch (error) {
		console.log('Fetch problem: ' + error.message)
	}
})

function questionsData(quizzes) {
	const container = document.createElement('div')
	const storedAnswers = JSON.parse(window.localStorage.getItem('answers')) || {}

	for (const key in quizzes.quiz) {
		const { question, options, answer } = quizzes.quiz[key]

		const questionDiv = document.createElement('div')
		questionDiv.innerHTML = `<h2><span>Question ${key.charAt(
			1,
		)}: </span>${question}</h2><br>
		${options
			.map(
				item => `
			<input type="radio" name="${key}" value="${item}" />
			<label>${item}</label><br>
		`,
			)
			.join('')}
	`
		const storedAnswer = storedAnswers[key]
		if (storedAnswer) {
			const radioInput = questionDiv.querySelector(`input[value="${storedAnswer}"]`)
			if (radioInput) {
				radioInput.checked = true
			}
		}

		container.appendChild(questionDiv)
	}
	document.body.appendChild(container)

	container.addEventListener('change', handleChange)
}

function handleChange(event) {
	if (event.target.type === 'radio') {
		const q = event.target.name
		const answer = event.target.value

		const storedAnswers = JSON.parse(window.localStorage.getItem('answers')) || {}
		storedAnswers[q] = answer

		window.localStorage.setItem('answers', JSON.stringify(storedAnswers))
	}
}
