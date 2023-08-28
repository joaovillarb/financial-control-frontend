import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCostsComponent } from './edit-costs.component';

describe('EditCostsComponent', () => {
  let component: EditCostsComponent;
  let fixture: ComponentFixture<EditCostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCostsComponent]
    });
    fixture = TestBed.createComponent(EditCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
