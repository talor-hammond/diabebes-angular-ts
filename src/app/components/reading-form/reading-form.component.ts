import { 
  Component, 
  OnInit,
  EventEmitter,
  Output
} from '@angular/core'

import { NgForm } from '@angular/forms'

import { Reading } from '../home/readings/reading.model'

@Component({
  selector: 'app-reading-form',
  templateUrl: './reading-form.component.html',
  styleUrls: ['./reading-form.component.css']
})
export class ReadingFormComponent implements OnInit {
  @Output() readingAdded = new EventEmitter<Reading>()

  constructor() { }

  ngOnInit() {
  }

  onReadingAdded(form: NgForm) {
    const { bg, time, insulin, note } = form.value
    const newReading = new Reading(bg, time, insulin, note)

    this.readingAdded.emit(newReading) // emitting the newReading as data that gets passed into the event listener as an argument
  }

}
