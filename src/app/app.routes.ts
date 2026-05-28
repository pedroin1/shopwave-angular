import { Routes } from '@angular/router';
import { LoginComponent } from '@pages/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
