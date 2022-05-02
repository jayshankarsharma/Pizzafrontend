import { Component, OnInit } from '@angular/core';
import { PizzaModel } from '../pages/main-content/PizzaModel';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders!: PizzaModel[];
  pizzaCart: any = '';
  cart: any;
  totalPrice: number = 0;
  constructor(public ordersService: OrdersService) {}

  ngOnInit(): void {
    this.orders = this.ordersService.getCompletedOrders();
    this.totalPrice = this.ordersService.getTotalPriceCompletedOrders();
    console.log('orders in Order component:- ', this.orders);
  }
  removeNull(arr: any) {
    return arr.filter((x: any) => x !== null);
  }
}
