import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <body>
    <div class="wrapper">
        <div class="productsList">
            <app-products></app-products>
        </div>
            <div>
              <app-shoppingcart></app-shoppingcart>
            </div>
    </div>
</body>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storefront-app';
}
