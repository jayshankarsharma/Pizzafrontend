import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authservice: AuthenticationService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('userloggedin') === 'true') {
      this.router.navigate(['/maincontent']);
    } else {
      this.validateForm = this.fb.group({
        userName: [null, [Validators.required]],
        password: [null, [Validators.required]],
        remember: [true],
      });
    }
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.onSubmit(this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  onSubmit(formvalue: any) {
    console.log('Form Value ', formvalue);
    this.authservice.login(formvalue.userName, formvalue.password).subscribe(
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

        this.router.navigate(['/maincontent']);
        localStorage.setItem('userloggedin', 'true');
        localStorage.setItem('userinfo', JSON.stringify(data));
        this.authservice.isLoggedIn.next(true);
      },
      (err) => {
        console.log('Error in API in Login ' + err.message);
        this.error = 'Not a valid user';
      }
    );
  }
}
