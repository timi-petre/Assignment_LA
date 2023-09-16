window.addEventListener('load', () => {
	let dat = JSON.parse(window.localStorage.getItem('answer'))
	return getData(dat)
})

async function getData(dat) {
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
}

function questionsData(quizes) {
	for (const key in quizes.quiz) {
		const { question, options, answer } = quizes.quiz[key]

		const divEl = document.createElement('div')
		divEl.innerHTML += `<h2><span>Question ${key.charAt(
			1,
		)}: </span> ${question} </h2></br> `

		let result = options
			.map(item => {
				return `<input checked type="radio" id="question" name=${key} value="${item}" />
					  <label for="question">${item}</label><br />`
			})
			.join('')

		localData()
		divEl.innerHTML += result

		document.body.append(divEl)
	}
}

function localData() {
	let answers = []
	document.body.addEventListener('change', event => {
		if (event.target.matches('input[type="radio"]')) {
			let question = event.target.name
			let answer = event.target.value

			answers[question] = answer
		}
		window.localStorage.setItem('answer', JSON.stringify(answers))
		console.log(answers)
	})
}

// TODO - verific raspunsul
// TODO - LocalStorage
// TODO - Optimizare Cod
