export class ProductType {
    ProductTypeId:number = 0
    Name:string = ""
    Description:string = ""
    DateCreated!:Date
    DateModified!:Date
    IsActive:boolean = false
    IsDeleted:boolean = false
}