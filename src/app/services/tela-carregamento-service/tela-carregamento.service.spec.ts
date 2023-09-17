import { TestBed } from '@angular/core/testing';

import { TelaCarregamentoService } from './tela-carregamento.service';

describe('TelaCarregamentoService', () => {
  let service: TelaCarregamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelaCarregamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
