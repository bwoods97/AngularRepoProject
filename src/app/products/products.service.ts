import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {id: 1, title: 'Pear lPhone 12', price: 499.00, favorite: true, category: 'Electronics', quantity: 0, isAdded: false},
    {id: 2, title: 'Segan 4DS', price: 99.00, favorite: false, category: 'Electronics', quantity: 0, isAdded: false},
    {id: 3, title: 'WindowSoft TBOX Two', price: 399.00, favorite: false, category: 'Electronics', quantity: 0, isAdded: false },
    {id: 4, title: 'Vernon GS1270 GPS', price: 200.50, favorite: false, category: 'Electronics', quantity: 0 , isAdded: false},
    {id: 5, title: 'GE ESaver Refridgrator', price: 659.00, favorite: false, category: 'Appliances', quantity: 0, isAdded: false },
    {id: 6, title: 'Umbran 560 Washing Machine', price: 400.00, favorite: false, category: 'Appliances', quantity: 0, isAdded: false },
    {id: 7, title: 'Umbran 650 Dryer', price: 300.00, favorite: false, category: 'Appliances', quantity: 0, isAdded: false },
    {id: 8, title: 'Luthor Tech Microwave Oven', price: 150.00, favorite: true, category: 'Appliances', quantity: 0, isAdded: false}
    ]

  getProducts(){
    return this.products
  }
  
  filter(category){
    return this.products.filter(p=>p.category === category)
  }
  
  updateFavorite(title){
    this.products.forEach(p => {
        if(p.title === title) {
            p.favorite = !p.favorite
        }
    })
}
  
}
