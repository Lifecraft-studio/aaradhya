import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBandComponent } from './price-band.component';

describe('PriceBandComponent', () => {
  let component: PriceBandComponent;
  let fixture: ComponentFixture<PriceBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceBandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
