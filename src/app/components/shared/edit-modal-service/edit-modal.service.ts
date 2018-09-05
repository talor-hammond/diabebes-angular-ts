import { Injectable, EventEmitter } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class EditModalService {
    modalOpen: boolean = false
    modalToggled = new EventEmitter<boolean>()


  toggleModal() {
    this.modalOpen = !this.modalOpen

    this.modalToggled.emit(this.modalOpen)
  }
}