import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { ContactComponent } from './contact/components/contact/contact.component'
import { DemoComponent } from './demo/demo.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { LayoutComponent } from './layout/layout.component'
import { AdminModule } from './admin/admin.module'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',        
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: ()=> import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'contact',
        loadChildren: ()=> import('./contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'admin',
    loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
