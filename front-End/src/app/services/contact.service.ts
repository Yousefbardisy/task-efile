import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private MyClient:HttpClient) { }

  baseUrl = "http://localhost:8080/api/v1/contact";
  listChangedEvent: EventEmitter<Contact[]> = new EventEmitter();


  getAllContacts() {
    return this.MyClient.get(this.baseUrl)};
  

    getAllContactsfilter(name:any) {
      return this.MyClient.get(`${this.baseUrl}/${name}`)
    };
    

  addContact(contact: any) {
    
    return this.MyClient.post(this.baseUrl,contact);
  }
  
  editContact(contact: Contact) {
    console.log(contact);
    
   return this.MyClient.put(`${this.baseUrl}/${contact.id}`,contact);

    
  }
  
  deleteContact(id:number) {
    return this.MyClient.delete(`${this.baseUrl}/${id}`);
  }
}
