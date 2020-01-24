import { TestBed } from '@angular/core/testing';

import { AniversariosService } from './aniversarios.service';

describe('AniversariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AniversariosService = TestBed.get(AniversariosService);
    expect(service).toBeTruthy();
  });
});
