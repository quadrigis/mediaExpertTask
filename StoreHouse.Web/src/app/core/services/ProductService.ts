import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { CreateProductRequest } from "../../models/create-product-request";
import { Product } from "../../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly http = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>(
      `${environment.apiUrl}/products`
    );
  }

  addProduct(product: CreateProductRequest) {
    return this.http.post<Product>(
      `${environment.apiUrl}/products`,
      product
    );
  }
}