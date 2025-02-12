import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../types/category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly apiUrl = environment.apiUrl + '/api/categories/';
  http = inject(HttpClient);

  constructor() {}

  getAllCategories() {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategoryByID(id: string) {
    return this.http.get<Category>(this.apiUrl + id);
  }

  deleteCategory(id: string) {
    return this.http.delete(this.apiUrl + id);
  }

  addCategory(name: string) {
    const payload = { name };
    return this.http.post(this.apiUrl, payload);
  }

  updateCategory(id: string, name: string) {
    const payload = { name };
    return this.http.put(this.apiUrl + id, payload);
  }
}
