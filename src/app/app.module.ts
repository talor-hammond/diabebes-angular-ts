import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReadingsComponent } from './components/home/readings/readings.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReadingFormComponent } from './components/home/reading-form/reading-form.component';
import { ReadingsSummaryComponent } from './components/home/readings/readings-summary/readings-summary.component';

// Directives

// Services
import { ReadingsService } from './components/home/readings/readings.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReadingsComponent,
    HomeComponent,
    FooterComponent,
    ReadingFormComponent,
    ReadingsSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ReadingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
