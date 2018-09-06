import { Component, OnInit, Input } from '@angular/core';

import { EditModalService } from '../../../shared/edit-modal-service/edit-modal.service'

@Component({
  selector: 'app-edit-reading',
  templateUrl: './edit-reading.component.html',
  styleUrls: ['./edit-reading.component.css']
})
export class EditReadingComponent implements OnInit {
  @Input() index: number

  constructor(private editModalService: EditModalService) { }

  ngOnInit() {
    console.log('modal open with index: ', this.index)
  }

  closeModal() {
    this.editModalService.deactivateModal()
  }

}
