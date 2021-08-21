import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('user') userInput: any;
  @ViewChild('password') passInput: any;

  // user: string = '';
  // password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.userInput.nativeElement.value == 'user1') {
      if (this.passInput.nativeElement.value == 'user1') {
        this.router.navigate(['/contacts']);
      }
    } else if (this.userInput.nativeElement.value == 'user2') {
      if (this.passInput.nativeElement.value == 'user2') {
        this.router.navigate(['/contacts']);
      }
    }
  }

}
