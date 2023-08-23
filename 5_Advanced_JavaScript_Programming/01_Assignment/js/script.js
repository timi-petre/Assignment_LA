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

let student1 = new Student('John Benson', 'High Park 36', '(507) 833-3567', 'Geography')

let student2 = new Student(
	'John Doe',
	'123 Main St',
	'(123) 456-7890',
	'Computer Science',
)

let student3 = new Student(
	'Jane Smith',
	'456 Elm St',
	'(987) 654-3210',
	'Business Administration',
)

let student1Info = student1.getInfo()
let student2Info = student2.getInfo()
let student3Info = student3.getInfo()

console.log(student1Info)
console.log(student2Info)
console.log(student3Info)
