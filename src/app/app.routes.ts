import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' // パスが完全一致したときにリダイレクト
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
