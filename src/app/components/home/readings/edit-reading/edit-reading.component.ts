import { Component, OnInit } from '@angular/core';

import { EditModalService } from '../../../shared/edit-modal-service/edit-modal.service'

@Component({
  selector: 'app-edit-reading',
  templateUrl: './edit-reading.component.html',
  styleUrls: ['./edit-reading.component.css']
})
export class EditReadingComponent implements OnInit {
  modalOpen: boolean

  constructor(private editModalService: EditModalService) { }

  ngOnInit() {
    this.editModalService.modalToggled
      .subscribe(
        (modalOpen: boolean) => {
          this.modalOpen = modalOpen
        }
      )
  }

  toggleModal() {
    this.editModalService.togglingModal()
  }

}
