import { Injectable, EventEmitter } from '@angular/core'

// Model(s)
import { Reading } from './reading.model'

@Injectable({ providedIn: 'root' }) // configuring our service to 'wrap' / or provide to the entire app
export class ReadingsService {
    readingsUpdated = new EventEmitter<Reading[]>()

    private readings: Reading[] = [
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
        },
        {
            bg: 8.1,
            time: '2:30PM',
            insulin: 7
        },
        {
            bg: 3.1,
            time: '5:00PM',
            insulin: 0,
            note: '25 grams of carbs to correct'
        }
    ]

    getReadings() {
        return this.readings.slice() // simply returns a copy of the array; i.e. not the original value
    }

    onReadingAdded(reading: Reading) {
        console.log(reading)
        this.readings.push(reading)

        this.readingsUpdated.emit(this.readings.slice()) // outputting the new data as an event; lets components w the service subscribe to changes
    }
}