import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { PizzaModel } from './PizzaModel';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css'],
})
export class MaincontentComponent implements OnInit {
  model = new PizzaModel('Hot-1 Pizza', 'Small', [], 0);

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

  constructor() {}

  pizzaChanged() {
    this.priceCalculation();
  }
  ngOnInit(): void {
    this.priceCalculation();
  }

  onSubmit(PizzaCard: { value: any }) {
    this.model.price = this.totalPrice;

    this.order = this.model;
    
    this.pizzaDetails.ingredients.map((data: any, index: number) => {
      if (this.model.ingredients[index]) {
        this.order.ingredients[index] = data[0];
        console.log('Data:- ' + data[0]);
      }
    });


    console.log('Pizza selected:- ', this.order);
    this.orders.push(this.order);

    // let tempOrder=localStorage.getItem("order1");
    // if(tempOrder)
    // this.orders.push(JSON.parse(tempOrder));
    localStorage.setItem('order1',JSON.stringify(this.orders));

    this.model = new PizzaModel('Hot-1 Pizza', 'Small', [], 0);
    console.log('Total orders:- ', this.orders);
  }

  priceCalculation() {
    this.pizzaDetails.pizzaOptions.map((data: any, index: number) => {
      if (data[0] === this.model.pizzaType) {
        this.pizzaPrice.pizzaOption = data[1];
      }
    });
    this.pizzaDetails.pizzaSize.map((data: any, index: number) => {
      if (data[0] === this.model.size) {
        this.pizzaPrice.pizzaSize = data[1];
      }
    });

    this.pizzaPrice.ingredients = 0;
    this.pizzaDetails.ingredients.map((data: any, index: number) => {
      if (this.model.ingredients[index]) {
        this.pizzaPrice.ingredients = this.pizzaPrice.ingredients + data[1];
      }
    });

    this.totalPrice =
      this.pizzaPrice.pizzaOption +
      this.pizzaPrice.pizzaSize +
      this.pizzaPrice.ingredients;
  }
}
