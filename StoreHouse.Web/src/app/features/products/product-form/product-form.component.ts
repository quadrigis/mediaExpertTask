import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CreateProductRequest } from '../../../models/create-product-request';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  private readonly formBuilder = inject(FormBuilder);

  @Output()
  readonly productSubmitted = new EventEmitter<CreateProductRequest>();

  readonly form = this.formBuilder.nonNullable.group({
    code: ['', [Validators.required, Validators.maxLength(50)]],
    name: ['', [Validators.required, Validators.maxLength(200)]],
    price: [0, [Validators.required, Validators.min(0.01)]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    this.productSubmitted.emit({
      code: value.code.trim(),
      name: value.name.trim(),
      price: value.price
    });
  }

  reset(): void {
    this.form.reset({ code: '', name: '', price: 0 });
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  get codeControl() {
    return this.form.controls.code;
  }

  get nameControl() {
    return this.form.controls.name;
  }

  get priceControl() {
    return this.form.controls.price;
  }
}
