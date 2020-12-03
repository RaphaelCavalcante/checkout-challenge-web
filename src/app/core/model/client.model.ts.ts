import { BaseModel } from '../../shared/abstract/abstract.model';
import { Basket } from './basket.model.ts';

export class Client extends BaseModel {
    basket: Basket;
}
