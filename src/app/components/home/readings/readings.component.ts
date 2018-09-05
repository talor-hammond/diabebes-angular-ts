import { Component, OnInit } from '@angular/core'

// Model(s)
import { Reading } from './reading.model'

// Services:
import { ReadingsService } from '../../shared/readings-service/readings.service'
import { EditModalService } from '../../shared/edit-modal-service/edit-modal.service'


@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {
  name: string = 'Talor'
  readings: Reading[]
  modalOpen: boolean = false

  constructor(
    private readingsService: ReadingsService,
    private editModalService: EditModalService
  ) { }

  ngOnInit() {
    this.readings = this.readingsService.getReadings()

    this.readingsService.readingsUpdated
      .subscribe( // listen to the readingsUpdated event...
        (readings: Reading[]) => {  // ...the event outputs the updated readings array
          this.readings = readings  // ...which we can assign to this.readings on this component
        }
      )

    this.editModalService.modalToggled
      .subscribe(
        (modalOpen: boolean) => {
          this.modalOpen = modalOpen
        }
      )
  }

  getClassByBg(reading: number) {
    switch (true) {
      case reading < 4: // for hypoglycaemia
        return 'list-group-item-warning'
      case reading > 10: // for hyperglycaemia
        return 'list-group-item-danger'
      default:
        return 'list-group-item-primary'
    }
  }

}
