import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  name:string="";
  
  eFlag: boolean = false;
  dFlag: boolean = false;
  addFlag: boolean = false;
  editContact: Contact = new Contact(0, "", "", "", "");
  // deleteContact: Contact = new Contact(0, "", "", "", "");
  
  constructor(private MyService:ContactService) { }
  totalLength:any;
  page:number=1;
  contacts: any;
  x: any;
  id: any;
  contact:any;
  pageOfItems:any;

  ngOnInit(): void {
    
    this.load();
    //  this.contacts.fill(0).map((y:any,i:any) => ({ id: (i + 1), name: `Item ${i + 1}`}));
    
  }
  ngOnChanges(): void {
    
    this.load();
    
  }
  
  
  load(){
    
    this.MyService.getAllContacts().subscribe(
      (res)=>{this.x=res
        this.contacts=this.x.contactsList;
        this.totalLength=this.contacts.length;
        console.log(this.totalLength);
        
      },
   (err)=>{console.log(err);}
  
  )}

  hideEdit(flag: boolean) {
    this.eFlag = flag;
    this.load()

  }

  showAdd() {
    this.addFlag = true;
  }
  filterCo(d:any){
    this.name = d.target.value;

    

  }
  filter(){
    this.MyService.getAllContactsfilter(this.name).subscribe(
      (res)=>{this.x=res
        
        this.contacts=this.x.contact;
        console.log(this.x.contact);

      },
     (err)=>{console.log(err);}
    
    )

    

    

  }
  
  showEdit(contact:any){
    this.id=contact._id
    this.contact=new Contact(this.id,contact.name,contact.phone,contact.address,contact.notes);
    this.eFlag = true;
  }
  hideAdd(event: any) {
    this.addFlag = false;
  }

  delete(id:number) {
    if (confirm("Are you sure")){
    this.MyService.deleteContact(id).subscribe();
    this.load()
    }
  }
}

