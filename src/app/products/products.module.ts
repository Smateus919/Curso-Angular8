import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './components/products/products.component'
import { ProductsRoutingModule } from './products.routing.module'
import { ProductComponent } from './components/product/product.component'
import { DetailProductComponent } from './components/product-detail/detail-product.component'

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DetailProductComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CoreModule,
    SharedModule,
    MaterialModule
  ]
})
export class ProductsModule { }
