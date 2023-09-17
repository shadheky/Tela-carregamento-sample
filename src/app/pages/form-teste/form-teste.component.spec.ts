import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTesteComponent } from './form-teste.component';

describe('FormTesteComponent', () => {
  let component: FormTesteComponent;
  let fixture: ComponentFixture<FormTesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTesteComponent]
    });
    fixture = TestBed.createComponent(FormTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
