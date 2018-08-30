// Model(s)
import { Reading } from './reading.model'

export class ReadingsService {
  // readings: Reading[] = [] // type: array of 'Reading' objects, defaulting to an empty array
  readings: Reading[] = [
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

  onReadingAdded(reading: Reading) {
    this.readings.push(reading)
  }
}