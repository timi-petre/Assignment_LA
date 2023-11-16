import { Component } from '@angular/core'
import { ContactsService } from './../service/contacts.service'

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
	constructor(public contactsService: ContactsService) {}

	onSubmit(content: any, tel: any) {
		const arrayContacts = []
		const regex = /[\[\]{}()*+?.,\\^$|#]/g

		for (let i = 0; i < this.contactsService.contactList.items.length; i++) {
			const item = this.contactsService.contactList.items[i]
			arrayContacts.push(item.content)
		}

		if (
			!arrayContacts.includes(content) &&
			content !== '' &&
			isNaN(content) &&
			tel.length <= 10 &&
			!regex.test(content)
		) {
			tel = '(+40) ' + tel.slice(0, 10)
			this.contactsService.addContact(content, tel)
		} else if (tel.length > 10) {
			alert('Tel. number must be 10 digits or less')
		} else {
			console.log('Name wrong! Should be letters only')
		}
	}
}
