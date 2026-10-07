import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe, MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input({ required: true })
  products: Product[] = [];
}
