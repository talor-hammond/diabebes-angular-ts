import { 
  Component, 
  OnInit 
} from '@angular/core'

import { NgForm } from '@angular/forms'

import { Reading } from '../home/readings/reading.model'

@Component({
  selector: 'app-reading-form',
  templateUrl: './reading-form.component.html',
  styleUrls: ['./reading-form.component.css']
})
export class ReadingFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onReadingAdded(form: NgForm) {
    const { bg, time, insulin, note } = form.value
    const reading = new Reading(bg, time, insulin, note)

    console.log(reading)
  }

}
