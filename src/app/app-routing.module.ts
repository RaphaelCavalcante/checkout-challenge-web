import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin-layout/admin-layout.module').then(mod => mod.AdminLayoutModule)
  },
  {
    path: 'cashier',
    loadChildren: () => import('./modules/cashier-layout/cashier-layout.module').then(mod => mod.CashierLayoutModule)
  },
  {
    path: '',
    redirectTo: 'cashier',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
