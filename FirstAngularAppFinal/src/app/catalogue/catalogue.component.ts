import { Component, OnInit } from '@angular/core';
import { Product } from '../tps/models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.sass']
})
export class CatalogueComponent implements OnInit {
  
  products : Array<Product> = new Array<Product>(); 
  filteredProducts  : Product[]=[];
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;


  constructor( private _productService : ProductsService) { 
    console.log("Enter constructor");
    
    
    
  }

  _rechercher: string;
  get rechercher(): string {
    return this._rechercher;
  }
  set rechercher(value: string) {
    this._rechercher = value;
    this.filteredProducts = this.rechercher ? this.performFilter(this.rechercher) : this.products;
  }
  
  _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  ngOnInit() {
    this._productService.GetProducts().subscribe((data) =>{
      this.products = data;
      this.filteredProducts = data;
    });
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy ===>  ");
  }

  ngOnChanges():void {
    console.log("ngOnChanges ===>  ");
  }

  performFilter(filterBy: string): Product[] {
    return this.products.filter((product:Product) =>
                                product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
