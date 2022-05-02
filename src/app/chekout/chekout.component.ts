import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.css'],
})
export class ChekoutComponent implements OnInit {
  price: number = 0;
  date!: Date;
  userInfo: any;
  temp: any;
  constructor(public ordersService: OrdersService) {}

  ngOnInit(): void {
    this.price = this.ordersService.getTotalPrice();
    this.date = new Date();

    if (localStorage.getItem('userinfo'))
      this.temp = localStorage.getItem('userinfo');
    this.userInfo = JSON.parse(this.temp);
    console.log(this.userInfo);
  }

  paymentConfirm() {
    this.ordersService.paymentDone(this.userInfo.username, this.userInfo.name);
  }
}
