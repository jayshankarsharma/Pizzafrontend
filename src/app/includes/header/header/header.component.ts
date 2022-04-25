import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/appservices/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginStatus:boolean=false;


  constructor(private router: Router,public authservice:AuthenticationService) {
  
  }

  ngOnInit(): void {
    this.authservice.isLoggedIn.subscribe(res=>{
      this.loginStatus=res;
    }    )
    // if(this.loginStatus) {
    //     this.router.navigate(['/maincontent']);
    // } else {
    //        this.router.navigate(['/maincontent']);
    // }
  }
  
  logout(): void {
    localStorage.setItem('userloggedin','false');
    this.authservice.isLoggedIn.next(false);
  }

}
