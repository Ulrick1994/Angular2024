import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProvComponent } from './listado-prov.component';

describe('ListadoProvComponent', () => {
  let component: ListadoProvComponent;
  let fixture: ComponentFixture<ListadoProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoProvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
