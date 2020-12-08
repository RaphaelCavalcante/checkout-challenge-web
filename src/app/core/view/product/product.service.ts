import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT_URL } from 'src/app/constant/constant-rest';
import { CrudService } from 'src/app/shared/crud-service/crud-service';
import { Product } from '../../model/product.model.ts';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService<Product> {

  constructor(http: HttpClient) {
    super(http, CONSTANT_URL.PRODUCT);
  }
}