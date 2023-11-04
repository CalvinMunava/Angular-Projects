import { Brand } from "./brand"
import { ProductType } from "./productType"


export class Product
{
   ProductId:number = 0
   Price:number = 0
   Image:string = ""
   BrandId:number = 0
   ProductTypeId: number = 0
   ProductType: ProductType = new ProductType();
   Brand: Brand = new Brand();
}

export class ProductViewModel
{ 
        price:number = 0
        producttype: number  = 0
        brand: number = 0
        description:number = 0
        name:string = ""
        image:string = ""
}