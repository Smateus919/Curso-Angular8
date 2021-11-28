import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductsService } from 'src/app/core/services/product/products.service';
import { Product } from '../../../core/models/product.model';
import { ListProductDataSource, ListProductItem } from './list-product-datasource';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'price', 'actions'];
  products = []
  product: Product;
  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(){
    this.fetchProducts()
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products
    })
  }
  deleteProduct(){
    this.productsService.deleteProduct('7')
      .subscribe(res => {
        this.fetchProducts()
      })
  }
}
