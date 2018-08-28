import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReadingsComponent } from './components/readings/readings.component';
import { HomeComponent } from './components/home/home.component';
import { ReadingComponent } from './components/readings/reading/reading.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReadingFormComponent } from './components/reading-form/reading-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReadingsComponent,
    HomeComponent,
    ReadingComponent,
    FooterComponent,
    ReadingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
