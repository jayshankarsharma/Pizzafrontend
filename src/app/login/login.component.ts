import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';




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
    localStorage.setItem('userloggedin','true');
    console.log("calling value in : ");
   
  }else{
    this.error="Invalid User";
  }
}
}
