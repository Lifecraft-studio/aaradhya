import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionOfBoardAndCommitteComponent } from './composition-of-board-and-committe.component';

describe('CompositionOfBoardAndCommitteComponent', () => {
  let component: CompositionOfBoardAndCommitteComponent;
  let fixture: ComponentFixture<CompositionOfBoardAndCommitteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionOfBoardAndCommitteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompositionOfBoardAndCommitteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
