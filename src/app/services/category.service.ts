import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category.model';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:8080/category/';

  constructor(private http: HttpClient, private userService: UserService) { }

  public getAllCategories(): Observable<Array<Category>> {
    const header = this.getAuthHeader();
    return this.http.get<Array<Category>>(this.baseUrl, {headers: header, observe: 'body'});
  }

  getCategoryById(categoryId: string): Observable<Category> {
    const header = this.getAuthHeader();
    return this.http.get<Category>(this.baseUrl.concat(categoryId), {headers: header, observe: 'body'});
  }

  createCategory(category: Category): Observable<Category> {
    const header = this.getAuthHeader();
    return this.http.post<Category>(this.baseUrl, category, {headers: header, observe: 'body'});
  }

  private getAuthHeader() {
    return new HttpHeaders({Authorization: localStorage.getItem('token')});
  }
}
