import ContactListItem from './ContactListItem'

class ContactList {
	items: any

	constructor() {
		this.items = this.loadFromLocalStorage()
	}

	add(item: any) {
		this.items.push(item)
		this.saveToLocalStorage()
	}

	delete(item: any) {
		this.items.splice(this.items.indexOf(item), 1)
		this.saveToLocalStorage()
	}

	saveToLocalStorage() {
		localStorage.setItem('contact-data', JSON.stringify(this.items))
	}

	loadFromLocalStorage() {
		var json = localStorage.getItem('contact-data')

		if (json === null) return []

		let jsonParsed = JSON.parse(json, (key, value) => {
			if (key === 'date') {
				value = new Date(value)
			}
			return value
		})

		if (jsonParsed.length === 0) return []

		let contactItems = []

		for (let i = 0; i < jsonParsed.length; i++) {
			contactItems.push(ContactListItem.fromJSON(jsonParsed[i]))
		}

		return contactItems
	}
}

export default ContactList
