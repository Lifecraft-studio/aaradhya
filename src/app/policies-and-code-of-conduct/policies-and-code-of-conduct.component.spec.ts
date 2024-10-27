import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesAndCodeOfConductComponent } from './policies-and-code-of-conduct.component';

describe('PoliciesAndCodeOfConductComponent', () => {
  let component: PoliciesAndCodeOfConductComponent;
  let fixture: ComponentFixture<PoliciesAndCodeOfConductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliciesAndCodeOfConductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciesAndCodeOfConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
