import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../appservices/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  error: string = '';
  Data: any;

  constructor(
    private router: Router,
    private authservice: AuthenticationService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('userloggedin') === 'true') {
      this.router.navigate(['/maincontent']);
    }
  }
  onSubmit() {
    this.authservice.login(this.username, this.password).subscribe(
      (data) => {
        console.log(
          'ser name-' +
            data.username +
            '; Full name-' +
            data.name +
            '; Mobile-' +
            data.mobile +
            ';  Address-' +
            data.address
        );
        this.Data = data;
        this.router.navigate(['/maincontent']);
        localStorage.setItem('userloggedin', 'true');
        this.authservice.isLoggedIn.next(true);

      },
      (err) => {
        console.log('Error in API in Login ' + err.message);
        this.error = err.message;
      }
    );
  }
}
