import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { BodyComponent } from './body/body.component'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'

import { ContactComponent } from './contact/contact.component'
import { ContactsAllComponent } from './contacts-all/contacts-all.component'

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		BodyComponent,
		FooterComponent,
		ContactsAllComponent,
		ContactComponent,
	],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
