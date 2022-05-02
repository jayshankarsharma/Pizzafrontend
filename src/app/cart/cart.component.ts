import { Component, OnInit } from '@angular/core';
import { PizzaModel } from '../pages/main-content/PizzaModel';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  orders!: PizzaModel[];
  pizzaCart: any = '';
  cart: any;
  totalPrice:number=100;
  constructor(public ordersService: OrdersService) {}

  ngOnInit(): void {
    // this.pizzaCart = localStorage.getItem('order1');
    // this.orders = JSON.parse(this.pizzaCart);
    this.orders=this.ordersService.getOrders();
    console.log('This is new cart data ', this.cart);
    this.totalPrice=this.ordersService.getTotalPrice();
  }
  removeNull(arr: any) {
    return arr.filter((x: any) => x !== null);
  }
  onDelete(i: number) {
    console.log("Delete order ",i);
    this.ordersService.removeOrder(i);
    this.orders=this.ordersService.getOrders();
    this.totalPrice=this.ordersService.getTotalPrice();
  }
}
