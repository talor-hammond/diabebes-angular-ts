import { Injectable, EventEmitter } from '@angular/core'

// Model(s)
import { Reading } from '../readings/reading.model'

@Injectable({ providedIn: 'root' }) // configuring our service to 'wrap' / or provide to the entire app
export class ReadingsService {
    readingsUpdated = new EventEmitter<Reading[]>()

    private readings: Reading[] = [ // template data for now
        {
            bg: 6.4,
            time: '9:00AM',
            insulin: 4,
            note: '~30grams of carbs for breakfast'
        },
        {
            bg: 12.2,
            time: '12:30PM',
            insulin: 2,
            note: '4 units / 30g could be too low'
        }
    ]

    getReadings() {
        return this.readings.slice() // simply returns a copy of the array; i.e. not the original value
    }

    onReadingAdded(reading: Reading) {
        this.readings.push(reading)

        this.readingsUpdated.emit(this.readings.slice()) // outputting the new data as an event; lets components w the service subscribe to changes
    }

    getReadingByIndex(index: number) {
        const reading = this.readings[index]
    }
}