import { 
  Component, 
  OnInit 
} from '@angular/core';

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

  onReadingAdded() {
    console.log('testing)')
  }

}
