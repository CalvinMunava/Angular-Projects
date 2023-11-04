import { Component } from '@angular/core';
import { Product } from '../classes/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

Products: Product[] = [];
constructor(private productsService:ProductsService){}

ngOnInit()
{
  this.getProducts();
}

getProducts()
{
  this.productsService.getProducts().subscribe(res => {
    console.log(res);
    this.Products = res;
  });
}






}
