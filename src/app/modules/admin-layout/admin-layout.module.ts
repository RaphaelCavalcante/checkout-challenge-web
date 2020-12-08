import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { PromoListComponent } from './promo/promo-list/promo-list.component';
import { PromoTypeListComponent } from './type/promo-type-list/promo-type-list.component';
import { ProductFormDialogComponent } from './product/dialog/product-form-dialog/product-form-dialog.component';
import { PromoFormDialogComponent } from './promo/dialog/promo-form-dialog/promo-form-dialog.component';
import { TypeFormDialogComponent } from './type/dialog/type-form-dialog/type-form-dialog.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatOptionModule, MatSelectModule, MatSidenavModule, MatTableModule } from '@angular/material';
import { IndexComponent } from './index/index.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProductListComponent, PromoListComponent,
    PromoTypeListComponent, ProductFormDialogComponent, PromoFormDialogComponent, TypeFormDialogComponent, HomeComponent, IndexComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    AdminLayoutRoutingModule,
    MatCheckboxModule
  ],
  entryComponents:[ProductFormDialogComponent]
})
export class AdminLayoutModule { }
