import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable, of, Subject } from 'rxjs';
import { PizzaModel } from '../pages/main-content/PizzaModel';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: PizzaModel[] = [];
  cart: PizzaModel[] = [];
  length: number = this.cart.length;
  oderCount = new Subject<number>();
  totalPrice = 0;
  constructor(private http: HttpClient) {}

  addOrders(order: PizzaModel) {
    this.cart.push(order);
    // console.log('Orders in Service ', this.cart);
    this.oderCount.next(this.cart.length);
  }
  getOrders() {
    return this.cart;
  }
  getOrderCount(): Observable<number> {
    return of(this.cart.length);
  }
  removeOrder(index: number) {
    this.cart.splice(index, 1);
    this.oderCount.next(this.cart.length);
  }
  getTotalPrice() {
    this.totalPrice = 0;
    this.cart.map((data) => {
      // console.log('price function ', data.price);
      this.totalPrice = this.totalPrice + data.price;
    });
    return this.totalPrice;
  }
  getTotalPriceCompletedOrders() {
    this.totalPrice = 0;
    this.orders.map((data) => {
      console.log('price function ', data.price);
      this.totalPrice = this.totalPrice + data.price;
    });
    return this.totalPrice;
  }
  getCompletedOrders() {
    return this.orders;
  }
  paymentDone(username: string, name: string) {
    this.orders = [];
    this.orders = Object.assign(this.cart);
    console.log(' in service Cart status:- ', this.cart);
    console.log(' in service Order status:- ', this.orders);

    this.cart = [];
    this.oderCount.next(this.cart.length);
    this.userOrdered(this.orders, username, name).subscribe(
      (res) => {
        console.log('Server response ', res);
      },
      (err) => {
        console.log('Server ERR response ', err);
      }
    );
  }

  userOrdered(orders: any, name: string, username: string): Observable<any> {
    return this.http.post<any>(
      'http://127.0.0.1:5000/api/orders',
      { orders, userName: username, name: name },
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
