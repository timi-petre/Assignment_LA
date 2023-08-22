let afisare = document.getElementById('studenti')
async function getData() {
	try {
		let response = await fetch(
			'https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt',
		)

		if (response.status !== 200) {
			throw new Error('Error reading data')
		}
		let text = await response.text()
		let arr = showData(text)
		afisare.innerHTML = arr
			.map((item, index) => {
				return `<li id=${index}>${item}</li>`
			})
			.join('')
	} catch (err) {
		afisare.innerHTML = 'Fetch problem: ' + err.message
	}
}
function showData(value) {
	let data = value.split('\n')
	return data
}

getData()
