import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterModule } from '@angular/router';

import { ReadingFormComponent } from '../reading-form/reading-form.component'
import { ReadingsComponent } from './readings.component';

describe('ReadingsComponent', () => {
  let component: ReadingsComponent;
  let fixture: ComponentFixture<ReadingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ReadingsComponent,
        ReadingFormComponent
      ],
      imports: [
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
