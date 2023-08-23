class Student {
	constructor(name, address, phone, course) {
		this.name = name
		this.address = address
		this.phone = phone
		this.course = course
	}

	getInfo() {
		return `<div class="card">
		<h2>Name: ${this.name}</h2>
		<p>Address: ${this.address}</p>
		<p>Phone: ${this.phone}</p>
		<p>Course: ${this.course}</p>
</div>`
	}
}
