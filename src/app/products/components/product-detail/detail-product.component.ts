import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router'
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/Service//product/products.service'


@Component({
  selector: 'app-detail-product',
  templateUrl: '../product-detail/detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id
      this.fetchProduct(id)
    })
  }
  fetchProduct(id){
    this.productsService.getProduct(id)
      .subscribe(res => {
        this.product = res
      })
  }
  createProd(){
    console.log('hola')
    const newProduct : Product = {
      id: "7",
      title: "Nuevo Producto",
      image: 'assets/images/banner-3.jpg',
      price: 50000,
      description: "new product by Sebastian Mateus from Platzi"
    }

    this.productsService.createProduct(newProduct)
    .subscribe(prod => {
      console.log(prod)
    })
  }
  updateProduct(){
    const changedProduct : Partial<Product> = {
      title: "Producto Cambiado",
      price: 75000,
    }
    this.productsService.updateProduct('7', changedProduct)
      .subscribe(res => {
        console.log(res)
      })
  }
  deleteProduct(){
    this.productsService.deleteProduct('')
      .subscribe(res => {
        console.log(res)
      })
  }
}
