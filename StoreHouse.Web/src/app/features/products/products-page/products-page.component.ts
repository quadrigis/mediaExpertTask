import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ProductsService } from '../../../core/services/products.service';
import { CreateProductRequest } from '../../../models/create-product-request';
import { Product } from '../../../models/product';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatToolbarModule,
    ProductFormComponent,
    ProductListComponent
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly snackBar = inject(MatSnackBar);

  @ViewChild(ProductFormComponent)
  private productForm?: ProductFormComponent;

  readonly products = signal<Product[]>([]);
  readonly isLoading = signal(false);
  readonly isSaving = signal(false);
  readonly hasLoadingError = signal(false);

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading.set(true);
    this.hasLoadingError.set(false);

    this.productsService.getAll()
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: products => this.products.set(products),
        error: error => {
          this.hasLoadingError.set(true);
          this.showError(this.getErrorMessage(error, 'Products could not be loaded.'));
        }
      });
  }

  addProduct(request: CreateProductRequest): void {
    if (this.isSaving()) {
      return;
    }

    this.isSaving.set(true);

    this.productsService.create(request)
      .pipe(finalize(() => this.isSaving.set(false)))
      .subscribe({
        next: createdProduct => {
          this.products.update(products => [...products, createdProduct]);
          this.productForm?.reset();
          this.snackBar.open('Product added successfully.', 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
        },
        error: error => {
          this.showError(this.getErrorMessage(error, 'The product could not be added.'));
        }
      });
  }

  private getErrorMessage(error: unknown, fallback: string): string {
    if (!(error instanceof HttpErrorResponse)) {
      return fallback;
    }

    if (error.status === 0) {
      return 'The API is unavailable. Make sure the backend is running.';
    }

    if (error.status === 400) {
      return 'The product data is invalid. Check the form values.';
    }

    return fallback;
  }

  private showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }
}
