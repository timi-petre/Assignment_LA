class Student {
	constructor(name, address, phone, course) {
		this.name = name
		this.address = address
		this.phone = phone
		this.course = course
	}

	getInfo() {
		return `
		<h2>Name: ${this.name}</h2>
		<p>Address: ${this.address}</p>
		<p>Phone: ${this.phone}</p>
		<p>Course: ${this.course}</p>
`
	}
}

const getStudents = document.getElementById('students')

async function getData() {
	try {
		let response = await fetch(
			'https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt',
		)

		if (response.status !== 200) {
			throw new Error('Error reading data')
		}
		let text = await response.text()
		let rows = text.split('\n')

		const s = []
		for (var i = 0; i < rows.length; i += 4) {
			s.push(rows.slice(i, i + 4))
		}

		let students = []

		for (let i = 0; i < s.length; i++) {
			let row = s[i]
			let name = row[0]
			let address = row[1]
			let phone = row[2]
			let course = row[3]
			let student = new Student(name, address, phone, course)
			students.push(student)
		}

		// Generate student cards
		let studentCards = ''
		for (const student of students) {
			studentCards += student.getInfo()
		}

		// Set the generated student cards in the 'studenti' container
		getStudents.innerHTML = studentCards
	} catch (err) {
		getStudents.innerHTML = 'Fetch problem: ' + err.message
	}
}

window.addEventListener('load', getData)
