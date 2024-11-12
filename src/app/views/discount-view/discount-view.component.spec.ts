import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountViewComponent } from './discount-view.component';

describe('DiscountViewComponent', () => {
  let component: DiscountViewComponent;
  let fixture: ComponentFixture<DiscountViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiscountViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
