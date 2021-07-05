import { Component, OnInit } from '@angular/core';
import { ShoppingCartService} from './shopping-cart.service';

@Component({
  selector: 'app-shoppingcart',
  template: 
  `
  <h4 class="shoppingCart"> Shopping List </h4>
<div class="shoppingCartList" >
  <div *ngFor="let pr of product">
    <h5>{{pr.title}}    {{pr.price}}</h5>
    <button (click)="pr.quantity = incCounter(pr)" (click) = "addTotal(pr)">Inc.</button>
    <h6> {{pr.quantity}} </h6>
    <button (click)="pr.quantity = decCounter(pr)" (click) = "subtractTotal(pr)">Dec.</button>
  </div>
</div>
  <div class="shoppingCartTotal">
   <div>   
      <h3> Total: $ {{totalCost}} </h3>
      </div>
  </div>
  
  
  
  
  `,
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  product = []
  totalCost:number = 0.00
  constructor(private scService:ShoppingCartService) { }

  ngOnInit(){
    this.scService.getProducts().subscribe((data:[])=>{
      console.log('recieved data', data)

      this.product = data
      
    })
  }

  incCounter(quant){
    

    return quant.quantity + 1

  }
  decCounter(quant){
    
    return quant.quantity - 1
    
  }

  addTotal(prod){
    this.totalCost = this.totalCost + prod.price
  }
  subtractTotal(prod){
    this.totalCost = this.totalCost - prod.price
  }
 
}
