import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/meus-produtos', pathMatch: 'full' },
  {
    path: 'meus-produtos',
    loadComponent: () =>
      import('./shared/components/products-list/products-list.component'),
  },
  {
    path: 'vendas',
    loadComponent: () => import('./shared/components/vendas/vendas.component'),
  },
  {
    path: 'planos',
    loadComponent: () => import('./shared/components/planos/planos.component'),
  },
];
