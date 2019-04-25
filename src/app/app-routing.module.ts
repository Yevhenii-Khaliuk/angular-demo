import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CategoriesComponent} from './categories/categories.component';
import {CategoryComponent} from './category/category.component';
import {AddCategoryComponent} from './categories/add-category/add-category.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'category/:id',
    component: CategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
