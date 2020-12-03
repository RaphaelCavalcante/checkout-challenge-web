import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/core/model/product.model.ts';

@Component({
  selector: 'app-basket-viewer',
  templateUrl: './basket-viewer.component.html',
  styleUrls: ['./basket-viewer.component.scss']
})
export class BasketViewerComponent implements OnInit {
  @Output() newAddedItem = new EventEmitter<Product>();
  @Input() products: Array<Product>;
  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }

}
