import { Injectable } from '@angular/core'
import ContactList from 'src/model/ContactList'
import ContactListItem from 'src/model/ContactListItem'

@Injectable({
	providedIn: 'root',
})
export class ContactsService {
	contactList: ContactList
	constructor() {
		this.contactList = new ContactList()
	}

	addContact(content: any, tel: any) {
		let contact = new ContactListItem(content, tel)
		this.contactList.add(contact)
	}

	deleteContact(item: any) {
		this.contactList.delete(item)
	}
}
