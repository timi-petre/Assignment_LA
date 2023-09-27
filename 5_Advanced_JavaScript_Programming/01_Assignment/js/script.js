class Student {
	constructor(name, address, phone, course) {
		this.name = name
		this.address = address
		this.phone = phone
		this.course = course
	}

	getInfo() {
		return `Name: ${this.name},\n Address: ${this.address},\n Phone: ${this.phone},\n Course: ${this.course}`
	}
}

let stud1 = new Student('John Benson', 'High Park 36', '(507) 833-3567', 'Geography')

let stud2 = new Student('John Doe', '123 Main St', '(123) 456-7890', 'Computer Science')

let stud3 = new Student(
	'Jane Smith',
	'456 Elm St',
	'(987) 654-3210',
	'Business Administration',
)

console.log(stud1.getInfo())
console.log(stud2.getInfo())
console.log(stud3.getInfo())
