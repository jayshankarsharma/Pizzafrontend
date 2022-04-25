import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../appservices/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  
  constructor(private router: Router, public authservice:AuthenticationService) { 
   
  }

  ngOnInit(): void {
    localStorage.setItem('userloggedin','false');
    this.authservice.isLoggedIn.next(false);
    
  }

}
