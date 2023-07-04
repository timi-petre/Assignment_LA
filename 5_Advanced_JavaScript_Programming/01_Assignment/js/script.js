class Student {
	constructor(name, address, phone, course) {
		this.name = name;
		this.address = address;
		this.phone = phone;
		this.course = course;
	}

	getInfo() {
		return `Name: ${this.name},\n Address: ${this.address},\n Phone: ${this.phone},\n Course: ${this.course}`;
	}
}

let student1 = new Student(
	'John Benson',
	'High Park 36',
	'(507) 833-3567',
	'Geography',
);

let student2 = new Student(
	'John Doe',
	'123 Main St',
	'(123) 456-7890',
	'Computer Science',
);

let student3 = new Student(
	'Jane Smith',
	'456 Elm St',
	'(987) 654-3210',
	'Business Administration',
);

console.log(student1.getInfo());
console.log(student2.getInfo());
console.log(student3.getInfo());
