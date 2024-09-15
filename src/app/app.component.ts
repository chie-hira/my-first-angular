import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // ディレクティブを使用するために必要
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  public title = 'my-first-angular';
  public isCartVisible: boolean = false;
  public cartItems: Product[] = [];
  private addToCartSubscription: Subscription;

  constructor(private productService: ProductService) {
    this.addToCartSubscription = this.productService.onAddToCart.subscribe(
      (product: Product) => {
        this.cartItems.unshift(product); // リストの先頭に追加
        // this.cartItems.push(product); //
      }
    );
  }

  // メモリリーク(メモリの不要な消費)の防止
  // subscriptionは自動で解除されないため、明示的にunsubscribe()を呼び出す必要がある
  public ngOnDestroy(): void {
    if (this.addToCartSubscription) {
      this.addToCartSubscription.unsubscribe();
    }
  }

  // 表示非表示の切り替え
  public showCart(): void {
    this.isCartVisible = !this.isCartVisible;
  }

  public trackByIndex(index: number, item: Product): number {
    return index;
  }

  public removeProduct(index: number): void {
    this.cartItems.splice(index, 1);
  }
}
