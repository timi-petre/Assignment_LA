class ContactListItem {
	id: string
	content: string
	tel: number

	constructor(content: any, tel: any) {
		this.id = Math.random().toString(36).substring(7)
		this.content = content
		this.tel = tel
	}

	static fromJSON(json: any) {
		let contactListItem = new ContactListItem(json.content, json.tel)
		contactListItem.id = json.id

		return contactListItem
	}
}

export default ContactListItem
