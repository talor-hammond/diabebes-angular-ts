import { Injectable, EventEmitter } from '@angular/core'

@Injectable({ providedIn: 'root' }) // configuring our service to 'wrap' / or provide to the entire app
export class EditModalService {
    activeModal: {index: number} // look at interfacing this for clarity
    activeModalUpdated = new EventEmitter<{index: number}>()

    activateModal(modal: {index: number}) {
        console.log('service firing with modal: ', modal)
        this.activeModal = modal

        this.activeModalUpdated.emit(this.activeModal)
    }
}