import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { tempGlobal } from '../includes/header/header/header.component';
export let tempGlobal:string;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
   if(this.username==='Admin' && this.password==='Admin')
   {
    this.router.navigate(['/maincontent']);
    localStorage.setItem('userloggedin','true')
    tempGlobal='logout';
  }else{
    this.error="Invalid User";
  }
}
}
