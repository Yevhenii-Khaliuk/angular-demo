import {Product} from './product.model';

export class Category {
  constructor(public id?: number,
              public description?: string,
              public categoryName?: string,
              public products: Array<Product> = []) {

  }


}
