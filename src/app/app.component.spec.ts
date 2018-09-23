import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReadingsComponent } from './components/home/readings/readings.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReadingFormComponent } from './components/home/reading-form/reading-form.component';
import { ReadingsSummaryComponent } from './components/home/readings/readings-summary/readings-summary.component';
import { AboutComponent } from './components/about/about.component';
import { FullReadingComponent } from './components/full-reading/full-reading.component';
import { EditReadingComponent } from './components/home/readings/edit-reading/edit-reading.component';

import { AppRoutingModule } from './routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ReadingsComponent,
        FullReadingComponent,
        AboutComponent,
        FooterComponent,
        ReadingFormComponent,
        ReadingsSummaryComponent,
        EditReadingComponent
      ],
      imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
