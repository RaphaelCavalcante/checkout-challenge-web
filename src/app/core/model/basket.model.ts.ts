import { BaseModel } from '../../shared/abstract/abstract.model';
import { Product } from './product.model.ts';

export class Basket extends BaseModel {
    product: Array<Product>;
}
