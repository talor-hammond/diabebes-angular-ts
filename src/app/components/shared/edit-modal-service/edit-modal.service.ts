import { Injectable, EventEmitter } from '@angular/core'

@Injectable({ providedIn: 'root' }) // configuring our service to 'wrap' / or provide to the entire app
export class EditModalService {
    activeModal: {index: number}
    activeModalUpdated = new EventEmitter<{index: number}>() // allows us to output an array of Reading objects
}