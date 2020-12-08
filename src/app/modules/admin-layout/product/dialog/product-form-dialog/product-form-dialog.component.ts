import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Promotion } from 'src/app/core/model/promotion.model.ts';
import { StartSessionDialogComponent } from 'src/app/modules/components/start-session-dialog/start-session-dialog.component';

@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.scss']
})
export class ProductFormDialogComponent implements OnInit {
  form: FormGroup;
  promotions: Array<Promotion> = new Array();
  constructor(
    public dialogRef: MatDialogRef<ProductFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.promotions = [
      {
        id: 1,
        timestamp: new Date(),
        description: 'Promo1'
      },
      {
        id: 2,
        timestamp: new Date(),
        description: 'Promo2'
      },
      {
        id: 3,
        timestamp: new Date(),
        description: 'Promo3'
      },
      {
        id: 4,
        timestamp: new Date(),
        description: 'Promo3'
      },
    ]
    this.form = new FormGroup({
      description: new FormControl(null, []),
      price: new FormControl(null, []),
      promos: new FormControl(null, [])
    });
  }
  get description() {
    return this.form.get('description');
  }
  get price() {
    return this.form.get('price');
  }
  get promos() {
    return this.form.get('promos');
  }
  ngOnInit() {
  }
  onSubmit() {
    this.dialogRef.close(this.form.value);
  }
}
