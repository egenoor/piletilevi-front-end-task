import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiletileviSvgComponent } from './piletilevi-svg.component';

describe('PiletileviSvgComponent', () => {
  let component: PiletileviSvgComponent;
  let fixture: ComponentFixture<PiletileviSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PiletileviSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiletileviSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
