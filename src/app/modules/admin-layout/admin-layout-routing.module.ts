import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { PromoListComponent } from './promo/promo-list/promo-list.component';
import { PromoTypeListComponent } from './type/promo-type-list/promo-type-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'product',
        component: ProductListComponent
      },
      {
        path: 'promo',
        component: PromoListComponent
      },
      {
        path: 'promo-type',
        component: PromoTypeListComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
