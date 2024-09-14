import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // 本来はAPIから取得するデータ
  public categories: string[] = ['Fridge', 'Washer', 'Kitchen', 'Vacuum', 'Climate', 'TV', 'Other'];

  // 一意の識別子を返すメソッド
  //ngForディレクティブでリストを描画する際に使用
  public trackByIndex(index: number, item: any): number {
    return index;
  }
}
