import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'todo',
    loadChildren:() => import('./feature/todo/delivery/todo.routes').then((r) => r.routes),
  },
  {
    path: '**',
    redirectTo: '/todo',
    pathMatch: 'full'
  }
];
