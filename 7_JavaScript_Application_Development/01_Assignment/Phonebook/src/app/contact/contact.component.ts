import { Component, Input } from '@angular/core'
import ContactListItem from 'src/model/ContactListItem'
import { ContactsService } from './../service/contacts.service'

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
	@Input() item!: ContactListItem
	constructor(public contactsService: ContactsService) {}

	onDelete() {
		return this.contactsService.deleteContact(this.item)
	}
}
