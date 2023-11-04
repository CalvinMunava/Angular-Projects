import { Component } from '@angular/core';
import { ProductViewModel } from '../classes/product';
import { ProductsService } from '../services/products.service';
import { ProductType } from '../classes/productType';
import { Brand } from '../classes/brand';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  brands: Brand[] = [];
  productTypes: ProductType[] = [];
  brandId:number = 0;
  productTypeId:number = 0;
  base64Output:string = "";

  constructor(public productsService:ProductsService,private router:Router){}

   addProductForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('',[Validators.required]),
    brand: new FormControl('',[Validators.required]),
    productType: new FormControl('',[Validators.required]),
    productDescription: new FormControl('',[Validators.required]),
  });
  ngOnInit()
  {
    this.getData();
  }
  getData()
  {
    this.productsService.getProductTypes().subscribe(res=> {
      this.productTypes = res;
      this.productsService.getBrands().subscribe(resp => {
        this.brands = resp;
      });
    })
  }
  addProduct()
  {
       if(this.addProductForm.valid)
       {
        let product = new ProductViewModel();
        product.name = this.addProductForm.value.name;
        product.price = this.addProductForm.value.price;
        product.brand = this.brandId;
        product.producttype = this.productTypeId;
        product.description = this.addProductForm.value.productDescription;
        product.image = this.base64Output;
        this.productsService.addProduct(product).subscribe(res => {
          console.log(res);
          if(res.Status == "Success")
          {
             this.router.navigateByUrl("/products");
          }
          else if (res.Status == "Error")
          {

          }
        });
       }
  }
  onFileSelected(event:any) {
    this.convertFile(event.target.files[0]).subscribe(base64 => {
      this.base64Output = base64;
    });
  }
  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target!.result!.toString()));
    return result;
  }
}
