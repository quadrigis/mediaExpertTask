import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CreateProductRequest } from '../../models/create-product-request';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = `${environment.apiUrl}/products`;

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint);
  }

  create(request: CreateProductRequest): Observable<Product> {
    return this.http.post<Product>(this.endpoint, request);
  }
}
