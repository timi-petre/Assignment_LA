import { Component, Input, OnInit } from '@angular/core'
import { ContactsService } from '../service/contacts.service'

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
	contacts: any = []
	constructor(public contactsService: ContactsService) {}
	ngOnInit() {
		this.contacts = this.contactsService.contactList.items
	}
}
