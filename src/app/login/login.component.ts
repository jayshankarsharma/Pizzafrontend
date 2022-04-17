import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username:string="";

  constructor(private router:Router) { 
    let username, password, mobile,fullName, address ;
    
        
  }

  ngOnInit(): void {
  }
validate(){ // validate user from server

}
onSubmit(f:NgForm){
  console.log("Credentials submitted "+this.username);
}
onSubmit2(){

}
  // submitclicked(){


  //   console.log("Credentials submitted 1 "+this.username);
  //   // localStorage.setItem('userloggedin',"true");
  //   // this.router.navigate(['/maincontent']);
    
  // }
}
