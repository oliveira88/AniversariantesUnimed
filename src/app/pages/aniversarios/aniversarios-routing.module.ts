import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AniversariosPage } from './aniversarios.page';

const routes: Routes = [
  {
    path: '',
    component: AniversariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AniversariosPageRoutingModule {}
