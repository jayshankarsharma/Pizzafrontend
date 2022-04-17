import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  auth:string='login';
  authentic:string='false';
  constructor(private router:Router) { 
    localStorage.setItem('userloggedin',this.authentic)
  }

  

  ngOnInit(): void {
    if(this.authentic==='false')
    this.auth='login';
    else{
      this.auth='loggedin';
      this.router.navigate(['/maincontent']);
    }
  }
alter(){
  this.auth=(this.auth=='signup')?'login':'signup';
  console.log("Cicked "+this.auth);
}
}
