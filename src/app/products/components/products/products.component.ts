import { Component, OnInit } from '@angular/core';

import { Product } from '../../../product.model'
import { ProductsService } from '../../../core/Service/product/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  products: Product[] = []

  seeId(id){
    console.log('Producto numero', id)
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products
    })
  }

}
