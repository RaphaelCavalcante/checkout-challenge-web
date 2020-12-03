import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT_URL } from 'src/app/constant/constant-rest';
import { CrudService } from 'src/app/shared/crud-service/crud-service';
import { Client } from '../../model/client.model.ts';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends CrudService<Client> {

  constructor(http: HttpClient) {
    super(http, CONSTANT_URL.CLIENT);
  }
}
