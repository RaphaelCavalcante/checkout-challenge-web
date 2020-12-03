import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierLayoutRoutingModule } from './cashier-layout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatDialog, MatDialogModule } from '@angular/material';
import { ComponentsModule } from '../components/components.module';
import { StartSessionDialogComponent } from '../components/start-session-dialog/start-session-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CashierLayoutRoutingModule,
    MatDialogModule,
    ComponentsModule,
  ],
  entryComponents: [StartSessionDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CashierLayoutModule { }
