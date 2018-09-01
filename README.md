# diabebes-angular-ts
Little web-app to track blood-glucose readings, notes and stuff made with Angular 2 & TypeScript

* Plan to use [this course](https://www.udemy.com/the-complete-guide-to-angular-2) for the learning of best-practices & convention w Angular & ts

### Initial thoughts
* **TypeScript**
    * the OOP-approach feels really familiar (coming from Swift which is *heavily-typed* as well)
    * **Code Quality**
        * love how errors / issues are sprung in real-time -- as opposed to run-time
    * planned all the initial components / model / features out and then ticked-through prefacing with the CLI
* **the role of services**
    * these are awesome -- gave me a way of letting components watch, or `.subscribe()` to events-emitted by the service
    * that way the data -- and changes to the data -- can be handled through the service, and logic to pull specific parts out can be handled through the component's class object
        * feels similar to the way redux works w `<Provider store={store}>` to manage application-state -- where with Angular, we have services being provided

Here's a snippet from my `readings.service.ts` file:
```typescript
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
}
```
...and here's `readings-summary.component.ts`, which listens to changes being made to `readings: reading[]` through `.subscribe()`
```typescript
export class ReadingsSummaryComponent implements OnInit {
  readings: Reading[]
  glucoseReadings: number[] = []

  isOpen: boolean = false

  constructor(private readingsService: ReadingsService) { }

  ngOnInit() {
    this.readings = this.readingsService.getReadings()
    this.glucoseReadings = this.getGlucose(this.readings)

    this.readingsService.readingsUpdated
      .subscribe( // listen to the readingsUpdated event...
        (readings: Reading[]) => {  // ...the event outputs the updated readings array
          this.readings = readings  // ...which we can assign to this.readings on this component

          this.glucoseReadings = this.getGlucose(this.readings) // also, reinit the glucose-readings array
        }
      )
  }

  getGlucose(readings: Reading[]) {
    const glucoseReadings = readings.map(reading => { // turning our array of objects into an array of reading.bg(s)
      return reading.bg
    })

    return glucoseReadings
  }

  getAverage() {
    let sum: number = Math.floor(this.glucoseReadings.reduce((acc, curr) => acc + curr)) // reducing that array of glucoseReadings into a sum...

    return sum / this.glucoseReadings.length // ...which we can divide through by the length of the array to find the average.
  }

  getLows() {
    return this.glucoseReadings.filter(reading => reading < 4).length // filter the readings below 4 into a new array, and return its length
  }
```
* **really enjoy the way everything looks & feels *separated***
    * while the conventional-directory seems more complex than a simple react-app, everything feels nicely segregated into specific parts: components, testing, models, css split up
* **angular-cli is super-convenient**
    * `ng g c ${componentName}` is powerful: streamlines workflow, sets up test-suite, unique stylesheet
    * planned all the initial components / model / features out and then ticked-through prefacing with the CLI
* **dealing with natural-HTML is really refreshing**
    * coming from using JSX which can get messy sometimes; especially with syntactical issues from ES6 & Babel <6 not co-operating sometimes

### To-do's / next-up
* ~use [ngClass] attribute-directive to dynamically return `list-item-group-${colour}` based on the bg reading~
* ~add new `Reading` objects into the readings array through the form; get it to reset on `(ngSubmit)`~
* ~collapsible summary section~
    * ~needs to receive data from `readings` component~
* ~have `readings-summary.component.ts` watch for changes to readings data correctly~
* ability to edit and add notes to readings
* compare latest and previous reading (nb: use index built in to `*ngFor*` directive), return trend / arrow dynamically
* use a time-picker for consistency in `readings.time` 
* ~routing w angular~
* data-persistence
    * probs need a back-end in combination w service
