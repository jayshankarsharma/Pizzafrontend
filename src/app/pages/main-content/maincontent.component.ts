import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders.service';
import { CartServiceService } from './cart-service.service';
import { PizzaModel } from './PizzaModel';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css'],
})
export class MaincontentComponent implements OnInit {
  model = new PizzaModel('Hot-1 Pizza', 'Small', [], 0);
  size: string = '';

  pizzaDetails: any = {
    pizzaOptions: [
      ['Hot-1 Pizza', 50],
      ['Hot-2 Pizza', 80],
      ['Hot-3 Pizza', 90],
      ['Hot-4 Pizza', 120],
    ],
    pizzaSize: [
      ['Small', 100],
      ['Medium', 200],
      ['Large', 300],
    ],
    ingredients: [
      ['ingredients1', 20],
      ['ingredients2', 40],
      ['ingredients3', 60],
      ['ingredients4', 80],
    ],
  };
  totalPrice = 0;
  pizzaPrice: any = {
    pizzaOption: 0,
    pizzaSize: 0,
    ingredients: 0,
  };
  order!: PizzaModel;
  orders: PizzaModel[] = [];

  constructor(public ordersService: OrdersService) {}

  pizzaChanged() {
    this.priceCalculation();
  }

  ngOnInit(): void {
    this.priceCalculation();
  }

  onSubmit() {
    this.order = this.model;

    this.pizzaDetails.ingredients.map((data: any, index: number) => {
      if (this.model.ingredients[index]) {
        this.order.ingredients[index] = data[0];
      }
    });

    this.order.ingredients = this.order.ingredients.filter((x: any) => !!x);
    this.ordersService.addOrders(this.order);
    this.model = new PizzaModel('Hot-1 Pizza', 'Small', [], 0);
  }

  priceCalculation() {
    this.model.price = 0;
    this.pizzaDetails.pizzaOptions.map((data: any, index: number) => {
      if (data[0] === this.model.pizzaType) {
        this.model.price = data[1];
      }
    });
    this.pizzaDetails.pizzaSize.map((data: any, index: number) => {
      if (data[0] === this.model.size) {
        this.model.price = this.model.price + data[1];
      }
    });

    this.pizzaPrice.ingredients = 0;
    this.pizzaDetails.ingredients.map((data: any, index: number) => {
      if (this.model.ingredients[index]) {
        this.model.price = this.model.price + data[1];
      }
    });
  }
}
