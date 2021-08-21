import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  @Input() editContact?: Contact ;
  @Output() editCanceled: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private MyService:ContactService) { }
  x:any;
  contacts:any;

  ngOnInit(): void {
  }

  hideEdit() {
    this.editCanceled.emit(false);
  }
 
  

  save(contact:any) {
    console.log(contact);
    
    this.MyService.editContact(contact).subscribe();

    this.hideEdit();
  }
}
