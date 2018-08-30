import { 
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Reading } from '../reading.model'

@Component({
  selector: 'app-readings-summary',
  templateUrl: './readings-summary.component.html',
  styleUrls: ['./readings-summary.component.css']
})
export class ReadingsSummaryComponent implements OnInit {
  @Input() readings: Reading[]
  isOpen: boolean = false

  constructor() { }

  ngOnInit() {
    console.log(this.readings)
  }

}
