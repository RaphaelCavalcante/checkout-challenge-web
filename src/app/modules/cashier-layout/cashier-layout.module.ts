import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierLayoutRoutingModule } from './cashier-layout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatCardModule, MatDialog, MatDialogModule, MatFormFieldModule, MatInputModule, MatListModule } from '@angular/material';
import { ComponentsModule } from '../components/components.module';
import { StartSessionDialogComponent } from '../components/start-session-dialog/start-session-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CashierLayoutRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    MatDialogModule,
    ComponentsModule,
    FlexLayoutModule,
    MatCardModule
  ],
  entryComponents: [StartSessionDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CashierLayoutModule { }
