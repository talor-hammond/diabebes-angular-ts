import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FullReadingComponent } from './full-reading.component';

describe('FullReadingComponent', () => {
  let component: FullReadingComponent;
  let fixture: ComponentFixture<FullReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullReadingComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
