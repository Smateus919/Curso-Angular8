import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/models/product.model'
import { ProductsService } from '../../../core/services/product/products.service'

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
    this.fetchProducts()
  }

  products: Product[] = [{
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla'
  }]

  seeId(id){
    console.log('Producto numero', id)
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products
    })
  }

  createProduct(){
    console.log('hola')
    const newProduct : Product = {
      id: '7',
      image: 'assets/images/mug.png',
      title: 'mug-copia',
      price: 95000,
      description: 'new product by Sebastian Mateus'
    }

    this.productsService.createProduct(newProduct)
    .subscribe(prod => {
      console.log(prod)
    })
  }

}
