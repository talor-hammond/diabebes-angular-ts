import { Component, OnInit, Input } from '@angular/core';

// Services
import { EditModalService } from '../../../shared/edit-modal-service/edit-modal.service'
import { ReadingsService } from '../../../shared/readings-service/readings.service'

@Component({
  selector: 'app-edit-reading',
  templateUrl: './edit-reading.component.html',
  styleUrls: ['./edit-reading.component.css']
})
export class EditReadingComponent implements OnInit {
  @Input() index: number // pass this property to edit-reading method

  constructor(
    private editModalService: EditModalService,
    private readingsService: ReadingsService
  ) { }

  ngOnInit() {
  
  }

  editNote(note: string) {
    this.readingsService.editNoteByIndex(note, this.index)

    this.closeModal()
  }

  closeModal() {
    this.editModalService.deactivateModal()
  }

}
