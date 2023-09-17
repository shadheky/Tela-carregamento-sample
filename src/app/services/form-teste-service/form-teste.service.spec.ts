import { TestBed } from '@angular/core/testing';

import { FormTesteService } from './form-teste.service';

describe('FormTesteService', () => {
  let service: FormTesteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormTesteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
