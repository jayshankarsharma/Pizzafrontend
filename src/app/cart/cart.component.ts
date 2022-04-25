import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   
 pizzaCart:any="";
     cart:any;
  pizzaType="Pizza Type";
  pizzaSize="Pizza Size";
  pizzaIngs=" Pizza ing";
  constructor() { }

  ngOnInit(): void {
    this.pizzaCart=localStorage.getItem("order1");
this.cart=JSON.parse(this.pizzaCart)
    this.pizzaType=this.cart?.type;
    this.pizzaSize=this.cart?.size;
    this.pizzaIngs=this.cart?.ingrediants;
 
  console.log("This is new cart data ",this.cart);
  }

}
