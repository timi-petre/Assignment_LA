import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsAllComponent } from './contacts-all.component';

describe('ContactsAllComponent', () => {
  let component: ContactsAllComponent;
  let fixture: ComponentFixture<ContactsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
