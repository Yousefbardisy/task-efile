import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  newContact: Contact = new Contact(0, "", "", "", "");
  @Output() addCanceled: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private MyService:ContactService) { }

  ngOnInit(): void {
  }

  save(newContact:any) {
    this.MyService.addContact(newContact).subscribe()

    this.addCanceled.emit(false);
  }

  cancel() {
    this.addCanceled.emit(false);
  }

}
