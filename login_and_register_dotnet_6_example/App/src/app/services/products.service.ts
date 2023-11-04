import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../classes/response';
import { environment } from 'src/environments/environment';
import { Product, ProductViewModel } from '../classes/product';
import { ProductType } from '../classes/productType';
import { Brand } from '../classes/brand';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = "Store/"
  
  constructor(private http:HttpClient) { }

  public getProducts()
  {
    return this.http.get<Product[]>(environment.apiUrl + this.apiUrl + "products");
  }

  public getProductTypes()
  {
    return this.http.get<ProductType[]>(environment.apiUrl + this.apiUrl + "productTypes");
  }

  public getBrands()
  {
    return this.http.get<Brand[]>(environment.apiUrl + this.apiUrl + "brands");
  }

  public addProduct(product:ProductViewModel)
  {
        return this.http.post<Response>(environment.apiUrl + this.apiUrl + "addProduct" , product)
  }

}
