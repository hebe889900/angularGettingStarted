import { Component,OnInit } from '@angular/core';
import { ProductService } from './product.service';


import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    errorMessage: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[] = [];

    products: IProduct[] = [];

    constructor(private _productService: ProductService) {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);//Return the filtered array
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('OnInit');
        this._productService.getProducts()
            .subscribe(products =>{
                this.products = products,
                this.filteredProducts = this.products;
            },
                error => this.errorMessage = <any>error);
    }
}