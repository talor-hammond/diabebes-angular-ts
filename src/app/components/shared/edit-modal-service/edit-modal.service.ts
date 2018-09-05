import { Injectable, EventEmitter } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class EditModalService {
    modalOpen: boolean = false
    modalToggled = new EventEmitter<boolean>()


  togglingModal() {
    this.modalOpen = !this.modalOpen

    this.modalToggled.emit(this.modalOpen)
  }
}