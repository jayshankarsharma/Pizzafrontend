import { Injectable } from '@angular/core';
import { PizzaModel } from './PizzaModel';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  orders: PizzaModel[] = [];
  constructor() { }
  addOrders(order:PizzaModel){
    this.orders.push(order);
    console.log("Orders in Service ",order)

  }
  getOrders(){
    return this.orders;
  }
}
