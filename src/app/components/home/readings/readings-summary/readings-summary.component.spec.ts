import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsSummaryComponent } from './readings-summary.component';

describe('ReadingsSummaryComponent', () => {
  let component: ReadingsSummaryComponent;
  let fixture: ComponentFixture<ReadingsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
