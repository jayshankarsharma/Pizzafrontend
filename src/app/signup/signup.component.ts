import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../appservices/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  fullname: string = '';
  username: string = '';
  password: string = '';
  confirmpassword: string = '';
  mobileno: string = '';
  address: string = '';
  error: string = '';

  constructor(
    private router: Router,
    private authservice: AuthenticationService
  ) {}

  ngOnInit(): void {}


  onSubmit() {
    // console.log('Submit button clicked ');
    if (this.password !== this.confirmpassword) {
      this.error = 'Password and confirm password must be same';
    } else {
      console.log(
        'Password ' +
          this.password +
          ' Confirm password ' +
          this.confirmpassword
      );
      this.authservice
        .signup(
          this.fullname,
          this.username,
          this.password,
          this.mobileno,
          this.address
        )
        .subscribe(
          (data) => {
            this.router.navigate(['/maincontent']);
          },
          (error) => {
            this.error = error;
            alert(error.message);
            this.router.navigate(['/signup']);
          }
        );
    }
  }
}
