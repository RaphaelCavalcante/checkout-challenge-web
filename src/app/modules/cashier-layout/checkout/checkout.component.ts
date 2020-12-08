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
  userName;
  constructor(private dialog: MatDialog) {
    this.form = new FormGroup({
      client_description: new FormControl(null, []),
      client_basket: new FormControl(null, [])
    });
    this.products = [
    ];
  }
  get client_basket() {
    return this.form.get('client_basket');
  }
  get client_description() {
    return this.form.get('client_description');
  }
  ngOnInit() {
    const dialogRef = this.dialog.open(StartSessionDialogComponent, {
      panelClass: 'dialog-feedback'
    });
    dialogRef.afterClosed().subscribe(value => {
      this.userName = value;
      this.form.get('client_description').setValue(value);
    });
  }
  addProductToBasket(product) {
    this.products.push(product);
    this.form.get('client_basket').setValue(this.products);
  }
  removeProductFromBasket(product) {
    this.products.map((value, index, products) => {
      if (product === (value)) {
        this.products.slice(index, 1);
      }
    });
  }

  checkout(){
    console.log("teste");
    console.log(this.form.value);
  }
}
