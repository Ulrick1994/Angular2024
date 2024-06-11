import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProvComponent } from './agregar-prov.component';

describe('AgregarProvComponent', () => {
  let component: AgregarProvComponent;
  let fixture: ComponentFixture<AgregarProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarProvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
