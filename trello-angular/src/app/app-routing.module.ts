import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoadDetailLayoutComponent } from './layout/boad-detail-layout/boad-detail-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        redirectTo: 'board',
        pathMatch: "full"
      },
      {
        path: '',
        redirectTo: 'board',
        pathMatch: "full"
      },
      {
        path: 'board',
        loadChildren: () => import('./pages/board/board.module').then(m => m.BoardModule)
      },
      {
        path: 'template',
        loadChildren: () => import('./pages/templates/templates.module').then(m => m.TemplatesModule)
      }
    ]
  },
  {
    path: 'board-detail',
    component: BoadDetailLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: ':id',
        pathMatch: "full"
      },
      {
        path: ':id',
        loadChildren: () => import('./pages/board-detail/board-detail.module').then(m => m.BoardDetailModule)
      }
      
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
