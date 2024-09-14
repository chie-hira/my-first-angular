import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  // selectorがコンポートのHTML要素
  // 親コンポーネントで使用するときは<app-product-card></app-product-card>と記述
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule], // ディレクティブ(*ngIfなど)を使用するために必要
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

// 親コンポーネントから受け取るデータをInputデコレータで定義
// これで子コンポーネント内でproductプロパティを使用できる
export class ProductCardComponent {
  @Input() product!: Product;
}
