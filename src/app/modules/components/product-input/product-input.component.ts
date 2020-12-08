import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/core/presenter/product';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.scss']
})
export class ProductInputComponent {
  @Output()
  addProductToBasket: EventEmitter<Product> = new EventEmitter();
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      description: new FormControl(null, []),
      price: new FormControl(null, []),
      promotions: new FormControl(null, [])
    });
  }

  addProduct(product) {
    this.addProductToBasket.emit(product);
    this.form.reset();
  }
}
