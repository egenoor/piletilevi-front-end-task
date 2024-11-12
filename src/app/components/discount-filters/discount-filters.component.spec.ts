import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountFiltersComponent } from './discount-filters.component';

describe('DiscountFiltersComponent', () => {
  let component: DiscountFiltersComponent;
  let fixture: ComponentFixture<DiscountFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
