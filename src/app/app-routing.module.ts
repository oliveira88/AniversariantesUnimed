import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'aniversarios', pathMatch: 'full' },
  {
    path: 'aniversarios',
    loadChildren: () => import('./pages/aniversarios/aniversarios.module').then(m => m.AniversariosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
