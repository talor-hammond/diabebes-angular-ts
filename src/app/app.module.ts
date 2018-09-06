import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module'

// Components
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

// Directives

// Services

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReadingsComponent,
    HomeComponent,
    FooterComponent,
    ReadingFormComponent,
    ReadingsSummaryComponent,
    AboutComponent,
    FullReadingComponent,
    EditReadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
