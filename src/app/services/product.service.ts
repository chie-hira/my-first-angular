import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // データの入れ物をsubjectで作成
  public onAddToCart: Subject<Product> = new Subject();

}
