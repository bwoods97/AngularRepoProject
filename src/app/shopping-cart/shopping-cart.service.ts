import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService{
    products = new Subject()
    temporaryArray = []
    

    addProduct(product){
        //console.log('Adding Product...')
        this.temporaryArray.push(product)
        this.products.next(this.temporaryArray)
        
    }

    getProducts(){
        return this.products
    }
    
    
}