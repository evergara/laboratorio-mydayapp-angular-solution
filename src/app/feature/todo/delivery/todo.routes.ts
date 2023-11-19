import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/todo.component'),
    children: [
      {
        path: ':filter',
        title: 'Todo view',
        loadComponent: () => import('./pages/todo.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
