import { 
  Component, 
  OnInit,
} from '@angular/core';

import { NgForm } from '@angular/forms';

// Services:
import { ReadingsService } from '../../shared/readings-service/readings.service';
import { ServerService } from '../../shared/server.service';

import { Reading } from '../../shared/reading.model'

@Component({
  selector: 'app-reading-form',
  templateUrl: './reading-form.component.html',
  styleUrls: ['./reading-form.component.css']
})
export class ReadingFormComponent {
  private readingsService: ReadingsService;
  private serverService: ServerService;

  constructor(readingsService: ReadingsService, serverService: ServerService) { 
    this.readingsService = readingsService;
    this.serverService = serverService;
  }

  addReading(form: NgForm) {
    const { bg, time, insulin, note } = form.value;

    const newReading = new Reading(Number(bg), time, insulin, note);

    this.readingsService.onReadingAdded(newReading); // calling the method within the readings service; much cleaner than the previous @Output() + new EE
  }

}
