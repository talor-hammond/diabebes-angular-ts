import { 
  Component, 
  OnInit,
} from '@angular/core'

import { NgForm } from '@angular/forms'

// Services:
import { ReadingsService } from '../../services/readings-service/readings.service'

import { Reading } from '../readings/reading.model'

@Component({
  selector: 'app-reading-form',
  templateUrl: './reading-form.component.html',
  styleUrls: ['./reading-form.component.css']
})
export class ReadingFormComponent implements OnInit {
  private readingsService: ReadingsService

  constructor(readingsService: ReadingsService) { 
    this.readingsService = readingsService
  }

  ngOnInit() {
  }

  addReading(form: NgForm) {
    const { bg, time, insulin, note } = form.value

    const newReading = new Reading(Number(bg), time, insulin, note)

    this.readingsService.onReadingAdded(newReading) // calling the method within the readings service; much cleaner than the previous @Output() + new EE
  }

}
