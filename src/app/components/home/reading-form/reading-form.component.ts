import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

// Services:
import { ReadingsService } from '../../shared/readings-service/readings.service';

// Data models:
import { Reading } from '../../shared/reading.model';

@Component({
  selector: 'app-reading-form',
  templateUrl: './reading-form.component.html',
  styleUrls: ['./reading-form.component.css']
})
export class ReadingFormComponent {
  private readingsService: ReadingsService;

  constructor(readingsService: ReadingsService) { 
    this.readingsService = readingsService;
  }

  addReading(form: NgForm) {
    const { bg, time, insulin, note } = form.value;

    const newReading = new Reading(Number(bg), time, insulin, note);

    this.readingsService.onReadingAdded(newReading)
      .subscribe(
        response => console.log(response),
        err => console.log(err)
      );
    
    // calling the method within the readings service; much cleaner than the previous @Output() + new EE
  }

}
