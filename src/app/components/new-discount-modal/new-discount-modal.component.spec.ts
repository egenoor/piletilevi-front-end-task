import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscountModalComponent } from './new-discount-modal.component';

describe('NewDiscountModalComponent', () => {
  let component: NewDiscountModalComponent;
  let fixture: ComponentFixture<NewDiscountModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDiscountModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDiscountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
