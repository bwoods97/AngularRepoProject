import { Component} from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  template: `
  <select (change)="filterProducts($event)">
  <option >Electronics</option>
  <option >Appliances</option>
</select>
<div class="productList">
    <div [ngClass]="{favourite:prod.favorite}" *ngFor="let prod of products">
        <h4>{{prod.title}} ({{prod.price}})</h4>
        {{prod.category}}<br>
        <button (click)="setFavorite(prod)">Fav</button><button (click)= "addToShoppingCart(prod)" (click) = "onButtonClick(prod)" [disabled]= "prod.isAdded">Add to Inv</button>
        </div>
</div>

`,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  
  products = []
  click:boolean = false

  constructor(private prodService:ProductsService, private shopService:ShoppingCartService){
  }
  
  ngOnInit(){
    console.log('OnInit called...')
    this.products = this.prodService.getProducts()
  }

  filterProducts(selected){
    this.products = this.prodService.filter(selected.target.value)
  }

  setFavorite(prod){
    console.log('setting Favorite...')
    this.prodService.updateFavorite(prod.title)
  }

  addToShoppingCart(prod){
    this.shopService.addProduct(prod)
  }

  onButtonClick(prod){
    prod.isAdded = true
  }
}
