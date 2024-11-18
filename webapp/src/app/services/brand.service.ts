import { inject, Injectable } from '@angular/core';
import { Brand } from '../types/brand';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private readonly apiUrl = 'http://localhost:3000/api/brands/';
  http = inject(HttpClient);

  constructor() {}

  getAllBrands() {
    return this.http.get<Brand[]>(this.apiUrl);
  }

  getBrandByID(id: string) {
    return this.http.get<Brand>(this.apiUrl + id);
  }

  deleteBrand(id: string) {
    return this.http.delete(this.apiUrl + id);
  }

  addBrand(name: string) {
    const payload = { name };
    return this.http.post(this.apiUrl, payload);
  }

  updateBrand(id: string, name: string) {
    const payload = { name };
    return this.http.put(this.apiUrl + id, payload);
  }
}
