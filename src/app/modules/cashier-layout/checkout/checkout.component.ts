import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Product } from 'src/app/core/model/product.model.ts';
import { StartSessionDialogComponent } from '../../components/start-session-dialog/start-session-dialog.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  form: FormGroup;
  products: Array<Product>;
  constructor(private dialog: MatDialog) {
    this.form = new FormGroup({
      client_description: new FormControl(null, []),
      client_basket: new FormControl(null, [])
    });
    this.products = [
      {
        id: 1,
        price: 10,
        quantity: 1,
        timestamp: new Date()
      },
      {
        id: 1,
        price: 10,
        quantity: 1,
        timestamp: new Date()
      },
      {
        id: 1,
        price: 10,
        quantity: 1,
        timestamp: new Date()
      },
      {
        id: 1,
        price: 10,
        quantity: 1,
        timestamp: new Date()
      },
      {
        id: 1,
        price: 10,
        quantity: 1,
        timestamp: new Date()
      }
    ];
  }
  get client_description() {
    return this.form.get('client_description');
  }

  ngOnInit() {
    const dialogRef = this.dialog.open(StartSessionDialogComponent, {
      panelClass: 'dialog-feedback'
    });
    dialogRef.afterClosed().subscribe(value => {
      this.form.get('client_description').setValue(value);
    });
  }

}
