import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AniversariosPage } from './aniversarios.page';

describe('AniversariosPage', () => {
  let component: AniversariosPage;
  let fixture: ComponentFixture<AniversariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniversariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AniversariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
