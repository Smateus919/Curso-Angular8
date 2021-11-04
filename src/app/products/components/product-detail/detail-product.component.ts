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
      this.product = this.productsService.getProduct(id)
    })
  }

}
