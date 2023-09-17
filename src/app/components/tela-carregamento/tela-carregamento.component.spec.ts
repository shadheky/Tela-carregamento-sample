import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCarregamentoComponent } from './tela-carregamento.component';

describe('TelaCarregamentoComponent', () => {
  let component: TelaCarregamentoComponent;
  let fixture: ComponentFixture<TelaCarregamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaCarregamentoComponent]
    });
    fixture = TestBed.createComponent(TelaCarregamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
