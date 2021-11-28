import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './components/nav/nav.component'
import { ListProductComponent } from './components/list-product/list-product.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { OrderListComponent } from './components/order-list/order-list.component'
import { FormProductComponent } from './components/form-product/form-product.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { ProductEditComponent } from './components/product-edit/product-edit.component'

const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ListProductComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
      {
        path: 'order-list',
        component: OrderListComponent
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'register',
    component: RegisterComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
