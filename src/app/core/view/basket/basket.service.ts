import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT_URL } from 'src/app/constant/constant-rest';
import { CrudService } from 'src/app/shared/crud-service/crud-service';
import { Basket } from '../../model/basket.model.ts';

@Injectable({
  providedIn: 'root'
})
export class BasketService extends CrudService<Basket> {

  constructor(http: HttpClient) {
    super(http, CONSTANT_URL.CLIENT);
  }
}