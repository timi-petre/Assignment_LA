const getStudents = document.getElementById('studenti')

async function getData() {
	try {
		const response = await fetch(
			'https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt',
		)

		if (response.status !== 200) {
			throw new Error('Error reading data')
		}

		const text = await response.text()
		const rows = text.split('\n')

		const studentCards = rows
			.reduce((acc, stud, index) => {
				if (index % 4 === 0) {
					const [name, address, phone, course] = rows.slice(index, index + 4)
					const student = new Student(name, address, phone, course)
					acc.push(student.getInfo())
				}
				return acc
			}, [])
			.join('')

		getStudents.innerHTML = studentCards
	} catch (err) {
		getStudents.innerHTML = 'Fetch problem: ' + err.message
	}
}

window.addEventListener('load', getData)
