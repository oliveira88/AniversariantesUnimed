import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AniversariosPageRoutingModule } from './aniversarios-routing.module';

import { AniversariosPage } from './aniversarios.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarAlt, faBars, faAngleLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AniversariosPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [AniversariosPage]
})
export class AniversariosPageModule {
  faAngleLeft = faAngleLeft;
  faCalendarAlt = faCalendarAlt;
  faBars = faBars;
  faCaretRight = faCaretRight;
}
