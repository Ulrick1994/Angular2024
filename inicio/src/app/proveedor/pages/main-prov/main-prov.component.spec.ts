import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProvComponent } from './main-prov.component';

describe('MainProvComponent', () => {
  let component: MainProvComponent;
  let fixture: ComponentFixture<MainProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainProvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
