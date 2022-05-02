import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginStatus: boolean = false;
  count: number = 3;
  userName: string = '';
  temp: any;
  constructor(
    private router: Router,
    public authservice: AuthenticationService,
    public ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    this.authservice.isLoggedIn.subscribe((res) => {
      this.loginStatus = res;
      this.temp = localStorage.getItem('userinfo');
      this.userName = this.temp ? JSON.parse(this.temp).name : '';
    });

    this.ordersService.oderCount.subscribe((res) => {
      console.log('Order Numbers from subject:- ', res);
      this.count = res;
    });
    this.ordersService.getOrderCount().subscribe((res) => {
      this.count = res;
      console.log('Order Numbers from getCount function:- ', this.count);
    });
  }

  logout(): void {
    localStorage.setItem('userloggedin', 'false');
    this.authservice.isLoggedIn.next(false);
  }
}
