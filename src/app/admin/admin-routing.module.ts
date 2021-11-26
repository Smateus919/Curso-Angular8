import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component'
import { NavComponent } from './components/nav/nav.component'
import { ListProductComponent } from './components/list-product/list-product.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { OrderListComponent } from './components/order-list/order-list.component'

const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'list',
        component: ListProductComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'order-list',
        component: OrderListComponent
      }
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }