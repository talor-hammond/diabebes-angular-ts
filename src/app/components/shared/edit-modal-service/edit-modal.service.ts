import { Injectable, EventEmitter } from '@angular/core'

// modal interface
export interface Modal {
    index: number,
    isActive: boolean
}

@Injectable({ providedIn: 'root' }) // configuring our service to 'wrap' / or provide to the entire app
export class EditModalService {
    activeModal: Modal // look at interfacing this for clarity
    activeModalUpdated = new EventEmitter<Modal>()

    activateModal(modal: Modal) {
        console.log('service firing with modal: ', modal)
        this.activeModal = modal

        this.activeModalUpdated.emit(this.activeModal)
    }
}