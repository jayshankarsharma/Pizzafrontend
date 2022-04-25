import { Component, OnInit } from '@angular/core';
import{ FormControl,FormGroup,NgForm} from '@angular/forms';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
priceTable={
  hot1:50,
  hot2:60,
  hot3:80,
  hot4:100,
  small:100,
  medium:200,
  large:300,
  ingr1:50,
  ingr2:60,
  ingr3:70
}
  lastOrders:any;
  orders:any=[];
  order:any={type:'hot 1',
size:" ",
ingrediants:[" "]
}
  pizzatype:string='Hot Pizza Type 1';
  size:string='';
  ingredients1:string='';
  ingredients2:string='';
  ingredients3:string='';

  constructor() { }

  ngOnInit(): void {
  }
  addToCart(){
    console.log("Add to cart clicked ");
  }
  onSubmit(){
    

this.order={
  type:"Hot 1",
  size:this.size,
  ingrediants:[this.ingredients1?"Ingr-1":"",this.ingredients2?"Ingr-2":"",this.ingredients3?"Ingr-3":""]
}

this.orders.push(this.order);
// this.lastOrders=localStorage.getItem("order1");
// this.orders.push(JSON.parse(this.lastOrders));

localStorage.setItem("order1", JSON.stringify(this.orders));
    console.log("Pizza status:- ",this.order);
    localStorage.setItem("order", JSON.stringify(this.order));
   this.priceCalculation(this.order);
  }

  priceCalculation(order:any){
    let price=0;
    console.log("order.type",order.type);
    console.log("order.size",order.size);
   console.log("order.ingr",order.ingrediants);
   switch (order.type) {
    case "Hot 1":
      console.log("Price of ",order.type," is ",this.priceTable.hot1);
      price=price+this.priceTable.hot1;
       break;
       case "Hot 2":
        console.log("Price of ",order.type," is ",this.priceTable.hot2);
      price=price+this.priceTable.hot2;
      break;
         case "Hot 3":
          console.log("Price of ",order.type," is ",this.priceTable.hot3);
      price=price+this.priceTable.hot3;
      break;
           case "Hot 4":
            console.log("Price of ",order.type," is ",this.priceTable.hot4);
      price=price+this.priceTable.hot4;
      break;
               
     default:console.log("Invalid selection")
       break;
   }
   switch (order.size) {
    case "Small":
      console.log("Price of ",order.size," is ",this.priceTable.small);
       break;
       case "Medium":
        console.log("Price of ",order.size," is ",this.priceTable.medium);
         break;
         case "Large":
          console.log("Price of ",order.size," is ",this.priceTable.large);
           break;
           
               
     default:console.log("Invalid selection")
       break;
   }
   for (const key in order.ingrediants) {
     
     switch (order.ingrediants[key]) {
       case "Ingr-1":
      console.log("Price of ",order.ingrediants[key]," is ",this.priceTable.ingr1);
      break;
      case "Ingr-2":
        console.log("Price of ",order.ingrediants[key]," is ",this.priceTable.ingr2);
        break;
        case "Ingr-3":
          console.log("Price of ",order.ingrediants[key]," is ",this.priceTable.ingr3);
          break;
          
          
          default:console.log("Invalid selection ",key)
          break;
        }
      }
  }
  // hot1:50,
  // hot2:60,
  // hot3:80,
  // hot4:100,
  // small:100,
  // medium:200,
  // large:300,
  // ingr1:50,
  // ingr2:60,
  // ingr3:70

}
