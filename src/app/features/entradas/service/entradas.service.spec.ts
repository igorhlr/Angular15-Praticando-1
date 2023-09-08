import { TestBed } from '@angular/core/testing';

import { EntradaService } from './entradas.service';

describe('EntradaService', () => {
  let service: EntradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
