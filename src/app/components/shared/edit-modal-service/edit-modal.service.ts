import { Injectable, EventEmitter } from '@angular/core'

// modal interface
export interface Modal {
    index: number,
    isActive: boolean
}

@Injectable({ providedIn: 'root' }) // configuring our service to 'wrap' / or provide to the entire app
export class EditModalService {
    activeModal: Modal = {
        index: null,
        isActive: false
    } // look at interfacing this for clarity
    activeModalUpdated = new EventEmitter<Modal>()

    activateModal(modal: Modal) {
        this.activeModal = modal

        this.activeModalUpdated.emit(this.activeModal)
    }

    deactivateModal() {
        this.activeModal = { // revert to default values, i.e. not displayed
            index: null,
            isActive: false
        }
    }

    checkIfActive(index: number) {
        // console.log('Checking if modal is active with index: ', index)

        // this.activeModal.index === index ? true : false // -- why does this produce a different result?
        if (this.activeModal.index === index) {
            return true
        } else {
            return false
        }
    }
}