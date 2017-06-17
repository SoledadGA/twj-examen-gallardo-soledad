import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacidadEnToneladasComponent } from './capacidad-en-toneladas.component';

describe('CapacidadEnToneladasComponent', () => {
  let component: CapacidadEnToneladasComponent;
  let fixture: ComponentFixture<CapacidadEnToneladasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacidadEnToneladasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacidadEnToneladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
