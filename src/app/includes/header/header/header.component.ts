import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  auth: string =  'login';

  // =localStorage.getItem('userloggedin');
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('userloggedin') === 'false') {
      this.auth = 'login';
      this.router.navigate(['/maincontent']);
    } else {
      this.auth = 'logout';
      this.router.navigate(['/maincontent']);
     
    }
    
  }
  changeLogIcon(){
    console.log("Change log function");
  }
}
