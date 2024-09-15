import { Component, Input, Inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  // selectorがコンポートのHTML要素
  // 親コンポーネントで使用するときは<app-product-card></app-product-card>と記述
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule], // ディレクティブ(*ngIfなど)を使用するために必要
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

// これはinputデコレータを使用した単純なデータの受け渡し(直接送受信)
// コンポーネントの使い回しが生じる大規模開発の場合は、サービスを使用してデータを受け渡す(間接送受信)
// 親コンポーネントから受け取るデータをInputデコレータで定義
// これで子コンポーネント内でproductプロパティを使用できる
export class ProductCardComponent {
  @Input() product!: Product;

  // コンストラクタを使用したDI(Dependency Injection)の実装
  constructor(private productService: ProductService) {}

  // Inject()関数を使ったフィールドインジェクション
  // private productService = Inject(ProductService);

  public addToCart(addedProduct: Product): void {
    this.productService.onAddToCart.next(addedProduct);
  }
}
