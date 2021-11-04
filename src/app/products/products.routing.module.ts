import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './components/product-detail/detail-product.component';

import { ProductsComponent } from './components/products/products.component'

const routes: Routes = [
    {
        path:'',
        component: ProductsComponent
    },
    {
        path:':id',
        component: DetailProductComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductsRoutingModule {}

