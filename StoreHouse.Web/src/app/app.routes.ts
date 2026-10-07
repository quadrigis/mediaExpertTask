import { Routes } from '@angular/router';

import { ProductsPageComponent } from './features/products/products-page/products-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
    title: 'StoreHouse | Product Catalog'
  }
];
