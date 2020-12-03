import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketViewerComponent } from './basket-viewer/basket-viewer.component';
import { ProductInputComponent } from './product-input/product-input.component';
import { StartSessionDialogComponent } from './start-session-dialog/start-session-dialog.component';
import { MatDialogContent, MatDialogModule, MatFormFieldControl, MatFormFieldModule,
   MatIconModule, MatInputModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BasketViewerComponent, ProductInputComponent, StartSessionDialogComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
  exports: [StartSessionDialogComponent, BasketViewerComponent, ProductInputComponent]
})
export class ComponentsModule { }
