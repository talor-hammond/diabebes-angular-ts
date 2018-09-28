import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// Model(s)
import { Reading } from '../reading.model';

@Injectable({ providedIn: 'root' }) // configuring our service to 'wrap' / or provide to the entire app
export class ReadingsService {
    url: string = 'https://diabebes-b0f83.firebaseio.com/readings.json'; // Use fbase db as a REST endpoint w *.json

    constructor(private http: Http) {};

    readingsUpdated = new EventEmitter<Reading[]>(); // allows us to output an array of Reading objects

    private readings: Reading[] = [ // template data for now; look to learn firebase as a back-end
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
            bg: 7.2,
            time: '3:30PM',
            insulin: 2,
            note: '10g of carb'
        }
    ]

    // getReadings() {
    //     return this.readings.slice();
    // }

    getReadings() {
        return this.http.get(this.url)
            .pipe( // ...takes an argument which is an operator that can be applied to your observable
                map((res: Response) => {
                    const data = res.json();

                    // transforms the json into an array (w nested array)... 
                    // ...returns a mapped array w a newly defined obj with associated 'id' (reading[0])
                    const readings = Object.entries(data).map(reading => Object.assign(reading[1], { id: reading[0] }));

                    return readings;
                }),
                catchError(err => {
                    return throwError(err)
                })
            );

        // return this.readings.slice(); // simply returns a copy of the array; i.e. not the original value
    }

    onReadingAdded(reading: Reading) {
        return this.http.post(this.url, reading); // 'An observable is kept alive until it completes'

        // this.readingsUpdated.emit(this.readings.slice()); // outputting the new data as an event; lets components w the service subscribe to changes
    }

    getReadingByIndex(index: number) {
        return this.readings[index];
    }

    editNoteByIndex(note: string, index: number) {
        this.readings[index].note = note;
        
        this.readingsUpdated.emit(this.readings.slice());
    }
}