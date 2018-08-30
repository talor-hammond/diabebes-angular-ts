import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingFormComponent } from './reading-form.component';

describe('ReadingFormComponent', () => {
  let component: ReadingFormComponent;
  let fixture: ComponentFixture<ReadingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
