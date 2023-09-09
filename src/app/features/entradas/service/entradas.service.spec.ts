import { TestBed } from '@angular/core/testing';

import { EntradasService } from './entradas.service';

describe('EntradaService', () => {
  let service: EntradasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
