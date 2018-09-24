import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { EditReadingComponent } from './edit-reading.component';

describe('EditReadingComponent', () => {
  let component: EditReadingComponent;
  let fixture: ComponentFixture<EditReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReadingComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
