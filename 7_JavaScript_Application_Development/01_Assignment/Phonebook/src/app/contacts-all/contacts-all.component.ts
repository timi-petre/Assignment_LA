import { Component, OnInit } from '@angular/core'
import ContactList from 'src/model/ContactList'
import { ContactsService } from '../service/contacts.service'

@Component({
	selector: 'app-contacts-all',
	templateUrl: './contacts-all.component.html',
	styleUrls: ['./contacts-all.component.css'],
})
export class ContactsAllComponent implements OnInit {
	contacts: any = []
	constructor(public contactsService: ContactsService) {}
	ngOnInit() {
		this.contacts = this.contactsService.contactList.items
	}
}
